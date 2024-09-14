import { database } from './firebaseConfig';
import { ref, push, get, update, remove, set } from 'firebase/database';

interface Reservation {
  id?: string;
  name: string;
  date: string;
  time: string;
  partySize: number;
  phone: string;
  email: string;
}

// Aggiungere una nuova prenotazione
export async function addReservation(reservation: Reservation) {
  try {
    console.log('Attempting to add reservation:', reservation);
    const reservationsRef = ref(database, 'reservations');
    const newReservationRef = push(reservationsRef);
    await set(newReservationRef, reservation);
    console.log('Reservation added successfully with ID:', newReservationRef.key);
    return { id: newReservationRef.key, ...reservation };
  } catch (error) {
    console.error('Error adding reservation:', error);
    throw error;
  }
}

// Ottenere tutte le prenotazioni
export async function getReservations() {
  try {
    const reservationsRef = ref(database, 'reservations');
    const snapshot = await get(reservationsRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const reservationsArray = Object.keys(data).map(id => ({ id, ...data[id] }));
      return reservationsArray;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error getting reservations:', error);
    throw error;
  }
}

// Modificare una prenotazione
export async function updateReservation(id: string, updatedReservation: Reservation) {
  try {
    const reservationRef = ref(database, `reservations/${id}`);
    await update(reservationRef, updatedReservation);
    return { id, ...updatedReservation };
  } catch (error) {
    console.error('Error updating reservation:', error);
    throw error;
  }
}

// Eliminare una prenotazione
export async function deleteReservation(id: string) {
  try {
    const reservationRef = ref(database, `reservations/${id}`);
    await remove(reservationRef);
    return { success: true };
  } catch (error) {
    console.error('Error deleting reservation:', error);
    throw error;
  }
}
