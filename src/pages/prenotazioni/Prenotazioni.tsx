import { useState } from 'react';
import { addReservation } from '../../../api';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Reservation {
  id: number;
  name: string;
  date: string;
  time: string;
  partySize: number;
  phone: string;  // Aggiunto il campo phone
  email: string;  // Aggiunto il campo email
}

function Reservations() {
  const [newReservation, setNewReservation] = useState<Omit<Reservation, 'id'>>({
    name: '',
    date: '',
    time: '19:30',
    partySize: 0,
    phone: '',  // Inizializza phone
    email: '',  // Inizializza email
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAddReservation = async () => {
    // Validate inputs
    if (!newReservation.name || !newReservation.date || !newReservation.time || newReservation.partySize <= 0 || !newReservation.phone || !newReservation.email) {
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
    setNewReservation({ name: '', date: '', time: '19:30', partySize: 0, phone: '', email: '' }); // Reset form
  };

  const generateTimeOptions = () => {
    const availableTimes = [
      '19:30', '19:45', '20:55', '21:00', '21:15', '21:30', '21:45', '22:00',
      '22:15', '22:30', '22:45', '23:00'
    ];

    return availableTimes.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ));
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
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Inserisci email"
            value={newReservation.email}
            onChange={(e) => setNewReservation({ ...newReservation, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Telefono</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Inserisci numero di telefono"
            value={newReservation.phone}
            onChange={(e) => setNewReservation({ ...newReservation, phone: e.target.value })}
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
