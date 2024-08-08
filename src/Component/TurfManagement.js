import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import './TurfManagement.css';

const TurfManagement = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    name: '', location: '', description: '', imgSrc: '', amount: '', rating: ''
  });
  const [editingBook, setEditingBook] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '', location: '', description: '', imgSrc: '', amount: '', rating: ''
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/books/getall');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8080/api/books/delete/${bookId}`);
      setBooks(books.filter(book => book.id !== bookId));
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result.split(',')[1]);
    };
    reader.readAsDataURL(file);
  };

  const addBook = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/books/add', newBook);
      setBooks([...books, response.data]);
      setNewBook({
        name: '', location: '', description: '', imgSrc: '', amount: '', rating: ''
      });
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  const updateBook = async () => {
    try {
      await axios.put(`http://localhost:8080/api/books/update/${editingBook.id}`, editForm);
      setBooks(books.map(book => (book.id === editingBook.id ? { ...book, ...editForm } : book)));
      setEditingBook(null);
      setEditForm({
        name: '', location: '', description: '', imgSrc: '', amount: '', rating: ''
      });
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating book', error);
    }
  };

  return (
    <div >
      <AdminNavbar />
      <div className="book-header-container">
        <h1>Manage Books</h1>
      </div>

      {/* Add Book Modal */}
      {showAddModal && (
        <div className="book-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="book-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Add Book</h2>
            <div className="book-modal-grid">
              <input
                type="text"
                placeholder="Name"
                value={newBook.name}
                onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                value={newBook.location}
                onChange={(e) => setNewBook({ ...newBook, location: e.target.value })}
              />
              <input
                type="text"
                placeholder="Description"
                value={newBook.description}
                onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, (base64) => setNewBook({ ...newBook, imgSrc: base64 }))}
              />
              <input
                type="number"
                placeholder="Amount"
                value={newBook.amount}
                onChange={(e) => setNewBook({ ...newBook, amount: e.target.value })}
              />
              <input
                type="number"
                placeholder="Rating"
                value={newBook.rating}
                onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })}
              />
            </div>
            <button onClick={addBook} className="book-action-button">Add Book</button>
            <button onClick={() => setShowAddModal(false)} className="book-close-modal-button">Close</button>
          </div>
        </div>
      )}

      {/* Edit Book Modal */}
      {showEditModal && editingBook && (
        <div className="book-modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="book-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Edit Book</h2>
            <div className="book-modal-grid">
              <input
                type="text"
                placeholder="Name"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                value={editForm.location}
                onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
              />
              <input
                type="text"
                placeholder="Description"
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, (base64) => setEditForm({ ...editForm, imgSrc: base64 }))}
              />
              <input
                type="number"
                placeholder="Amount"
                value={editForm.amount}
                onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
              />
              <input
                type="number"
                placeholder="Rating"
                value={editForm.rating}
                onChange={(e) => setEditForm({ ...editForm, rating: e.target.value })}
              />
            </div>
            <button onClick={updateBook} className="book-action-button">Update Book</button>
            <button onClick={() => setShowEditModal(false)} className="book-close-modal-button">Close</button>
          </div>
        </div>
      )}

      <table className="book-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Image</th>
            <th>Amount</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.location}</td>
              <td>{book.description}</td>
              <td>{book.imgSrc && <img src={`data:image/png;base64,${book.imgSrc}`} alt={book.name} className="book-img-preview" />}</td>
              <td>{book.amount}</td>
              <td>{book.rating}</td>
              <td>
                <button
                  onClick={() => {
                    setEditingBook(book);
                    setEditForm({
                      name: book.name,
                      location: book.location,
                      description: book.description,
                      imgSrc: book.imgSrc,
                      amount: book.amount,
                      rating: book.rating
                    });
                    setShowEditModal(true);
                  }}
                  className="book-action-button"
                >
                  Edit
                </button>
                <button onClick={() => deleteBook(book.id)} className="book-action-button">Delete</button>
                <button onClick={() => setShowAddModal(true)} className="book-open-modal-button">Add Book</button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default TurfManagement;
