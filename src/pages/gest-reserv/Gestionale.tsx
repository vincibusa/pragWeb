import React, { useEffect, useState } from 'react';
import { getReservations, updateReservation, deleteReservation } from '../../../api';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Reservation {
  id: number;
  name: string;
  date: string;
  time: string;
  partySize: number;
}

export default function Gestionale() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [editingReservation, setEditingReservation] = useState<Reservation | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getReservations();
        setReservations(result.reservations);
      } catch {
        setErrorMessage('Failed to fetch reservations.');
      }
    }
    fetchData();
  }, []);

  const handleDeleteReservation = async (id: number) => {
    try {
      await deleteReservation(id);
      setReservations(reservations.filter((r) => r.id !== id));
    } catch {
      setErrorMessage('Failed to delete reservation.');
    }
  };

  const handleEditReservation = (reservation: Reservation) => {
    setEditingReservation(reservation);
  };

  const handleUpdateReservation = async () => {
    if (editingReservation) {
      try {
        const { id, ...updatedReservation } = editingReservation;
        await updateReservation(id, updatedReservation);
        setReservations(reservations.map((r) => (r.id === id ? editingReservation : r)));
        setEditingReservation(null);
      } catch {
        setErrorMessage('Failed to update reservation.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editingReservation) {
      const { name, value } = e.target;
      setEditingReservation({ ...editingReservation, [name]: value });
    }
  };

  const generateTimeOptions = () => {
    const options: JSX.Element[] = [];
    for (let hour = 19; hour <= 23; hour++) {
      ['00', '15', '30', '45'].forEach((minute) => {
        const time = `${hour.toString().padStart(2, '0')}:${minute}`;
        options.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      });
    }
    return options;
  };

  const formatDateToItalian = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Gestione Prenotazioni</h1>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <ul className="list-group mb-4">
        {reservations.map((reservation) => (
          <li key={reservation.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{reservation.name}</strong> - {formatDateToItalian(reservation.date)} alle {reservation.time} per {reservation.partySize} persone
            </div>
            <div className='d-flex gap-2'>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditReservation(reservation)}>
                Modifica
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDeleteReservation(reservation.id)}>
                Elimina
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingReservation && (
        <form className="mb-4 d-flex flex-column gap-3">
          <div className="form-group">
            <label>Nome e cognome</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={editingReservation.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Giorno</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={editingReservation.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Ora</label>
            <select
              className="form-control"
              name="time"
              value={editingReservation.time}
              onChange={handleChange}
            >
              {generateTimeOptions()}
            </select>
          </div>
          <div className="form-group">
            <label>Numero di persone</label>
            <input
              type="number"
              className="form-control"
              name="partySize"
              value={editingReservation.partySize}
              onChange={handleChange}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-primary mt-3" onClick={handleUpdateReservation}>
              Aggiorna Prenotazione
            </button>
          </div>
        </form>
      )}
    </div>
  ); 
}