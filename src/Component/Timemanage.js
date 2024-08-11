import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Timemanage.css';
import AdminNavbar from './AdminNavbar';

const Timemanage = () => {
  const [times, setTimes] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newTime, setNewTime] = useState({
    date: '', timeSlotStart: '', timeSlotEnd: '', amount: ''
  });
  const [editingTime, setEditingTime] = useState(null);
  const [editForm, setEditForm] = useState({
    date: '', timeSlotStart: '', timeSlotEnd: '', amount: ''
  });

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/times/getall');
        setTimes(response.data);
      } catch (error) {
        console.error('Error fetching times', error);
      }
    };

    fetchTimes();
  }, []);

  const addTime = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/times/add', newTime);
      setTimes([...times, response.data]);
      setNewTime({
        date: '', timeSlotStart: '', timeSlotEnd: '', amount: ''
      });
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding time slot', error);
    }
  };

  const updateTime = async () => {
    try {
      await axios.put(`http://localhost:8080/api/times/update/${editingTime.id}`, editForm);
      setTimes(times.map(time => (time.id === editingTime.id ? { ...time, ...editForm } : time)));
      setEditingTime(null);
      setEditForm({
        date: '', timeSlotStart: '', timeSlotEnd: '', amount: ''
      });
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating time slot', error);
    }
  };

  const deleteTime = async (timeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/times/delete/${timeId}`);
      setTimes(times.filter(time => time.id !== timeId));
    } catch (error) {
      console.error('Error deleting time slot', error);
    }
  };

  return (
    <div className='time-manage'>
        <AdminNavbar/>
    <div className="turf-management">
      <h1>Manage Time Slots</h1>
      <button onClick={() => setShowAddModal(true)} className="book-action-button">Add Time Slot</button>

      {/* Table View */}
      <table className="book-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(times) && times.map(time => (
            <tr key={time.id}>
              <td>{time.id}</td>
              <td>{time.date}</td>
              <td>{time.timeSlotStart}</td>
              <td>{time.timeSlotEnd}</td>
              <td>${time.amount}</td>
              <td>
                <button onClick={() => {
                  setEditingTime(time);
                  setEditForm({
                    date: time.date,
                    timeSlotStart: time.timeSlotStart,
                    timeSlotEnd: time.timeSlotEnd,
                    amount: time.amount
                  });
                  setShowEditModal(true);
                }} className="book-action-button">Edit</button>
                <button onClick={() => deleteTime(time.id)} className="book-delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Time Slot Modal */}
      {showAddModal && (
        <div className="book-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="book-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Add Time Slot</h2>
            <div className="book-modal-grid">
              <input
                type="date"
                placeholder="Date"
                value={newTime.date}
                onChange={(e) => setNewTime({ ...newTime, date: e.target.value })}
              />
              <input
                type="time"
                placeholder="Start Time"
                value={newTime.timeSlotStart}
                onChange={(e) => setNewTime({ ...newTime, timeSlotStart: e.target.value })}
              />
              <input
                type="time"
                placeholder="End Time"
                value={newTime.timeSlotEnd}
                onChange={(e) => setNewTime({ ...newTime, timeSlotEnd: e.target.value })}
              />
              <input
                type="number"
                placeholder="Amount"
                value={newTime.amount}
                onChange={(e) => setNewTime({ ...newTime, amount: e.target.value })}
              />
            </div>
            <button onClick={addTime} className="book-action-button">Add Time Slot</button>
            <button onClick={() => setShowAddModal(false)} className="book-close-modal-button">Close</button>
          </div>
        </div>
      )}

      {/* Edit Time Slot Modal */}
      {showEditModal && editingTime && (
        <div className="book-modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="book-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Edit Time Slot</h2>
            <div className="book-modal-grid">
              <input
                type="date"
                placeholder="Date"
                value={editForm.date}
                onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
              />
              <input
                type="time"
                placeholder="Start Time"
                value={editForm.timeSlotStart}
                onChange={(e) => setEditForm({ ...editForm, timeSlotStart: e.target.value })}
              />
              <input
                type="time"
                placeholder="End Time"
                value={editForm.timeSlotEnd}
                onChange={(e) => setEditForm({ ...editForm, timeSlotEnd: e.target.value })}
              />
              <input
                type="number"
                placeholder="Amount"
                value={editForm.amount}
                onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
              />
            </div>
            <button onClick={updateTime} className="book-action-button">Update Time Slot</button>
            <button onClick={() => setShowEditModal(false)} className="book-close-modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Timemanage;
