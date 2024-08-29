import { useState } from 'react';
import { addReservation } from '../../../api';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Reservation {
  id: number;
  name: string;
  date: string;
  time: string;
  partySize: number;
}

function Reservations() {
  const [newReservation, setNewReservation] = useState<Omit<Reservation, 'id'>>({
    name: '',
    date: '',
    time: '19:00',
    partySize: 0,
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAddReservation = async () => {
    // Validate inputs
    if (!newReservation.name || !newReservation.date || !newReservation.time || newReservation.partySize <= 0) {
      setErrorMessage('Tutti i campi devono essere compilati correttamente.');
      
      // Clear the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      
      return;
    }

    // Clear error message
    setErrorMessage('');

    // Call API
    await addReservation(newReservation);
    setNewReservation({ name: '', date: '', time: '19:00', partySize: 0 }); // Reset form with default time
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

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Prenota un tavolo</h1>

      <form className="mb-4 d-flex flex-column gap-3">
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div className="form-group">
          <label>Nome e cognome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Inserisci nome e cognome"
            value={newReservation.name}
            onChange={(e) => setNewReservation({ ...newReservation, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Giorno</label>
          <input
            type="date"
            className="form-control"
            value={newReservation.date}
            min={getCurrentDate()}
            onChange={(e) => setNewReservation({ ...newReservation, date: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Ora</label>
          <select
            className="form-control"
            value={newReservation.time}
            onChange={(e) => setNewReservation({ ...newReservation, time: e.target.value })}
          >
            {generateTimeOptions()}
          </select>
        </div>
        <div className="form-group">
          <label>Numero di persone</label>
          <input
            type="number"
            className="form-control"
            placeholder="Inserisci numero posti"
            value={newReservation.partySize}
            onChange={(e) => setNewReservation({ ...newReservation, partySize: parseInt(e.target.value) })}
          />
        </div>
        <div className='d-flex justify-content-center'>
          <button type="button" className="btn btn-primary mt-3" onClick={handleAddReservation}>
            Invia Prenotazione
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reservations;