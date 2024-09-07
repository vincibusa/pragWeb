const API_BASE_URL = 'https://prag-backend-f260aea8cfa5.herokuapp.com';

interface Reservation {
    id?: number; // Optional because it might not be present when adding a new reservation
    name: string;
    date: string;
    time: string;
    partySize: number;
  }

// Aggiungere una nuova prenotazione
export async function addReservation(reservation: Reservation) {
  const response = await fetch(`${API_BASE_URL}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  });
  return await response.json();
}

// Ottenere tutte le prenotazioni
export async function getReservations() {
  const response = await fetch(`${API_BASE_URL}/reservations`);
  return await response.json();
}

// Modificare una prenotazione
export async function updateReservation(id: number, updatedReservation: Reservation) {
  const response = await fetch(`${API_BASE_URL}/reservations/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedReservation),
  });
  return await response.json();
}

// Eliminare una prenotazione
export async function deleteReservation(id: number) {
  const response = await fetch(`${API_BASE_URL}/reservations/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}
