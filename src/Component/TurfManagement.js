import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TurfManagement.css';
import AdminNavbar from './AdminNavbar';

const TurfManagement = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newBook, setNewBook] = useState({
    name: '', location: '', description: '', imgSrc: '', amount: '', rating: '', categoryId: ''
  });
  const [editingBook, setEditingBook] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '', location: '', description: '', imgSrc: '', amount: '', rating: '', categoryId: ''
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/books/getall');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories/getall'); // Adjust endpoint as needed
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchBooks();
    fetchCategories();
  }, []);

  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result.split(',')[1]); // Get Base64 string without data URL prefix
    };
    reader.readAsDataURL(file);
  };

  const addBook = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/books/add', {
        ...newBook,
        amount: parseFloat(newBook.amount),
        rating: parseFloat(newBook.rating),
        category: { id: newBook.categoryId } // Send category ID
      });
      setBooks([...books, response.data]);
      setNewBook({
        name: '', location: '', description: '', imgSrc: '', amount: '', rating: '', categoryId: ''
      });
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  const updateBook = async () => {
    try {
      await axios.put(`http://localhost:8080/api/books/update/${editingBook.id}`, {
        ...editForm,
        amount: parseFloat(editForm.amount),
        rating: parseFloat(editForm.rating),
        category: { id: editForm.categoryId } // Send category ID
      });
      setBooks(books.map(book => (book.id === editingBook.id ? { ...book, ...editForm } : book)));
      setEditingBook(null);
      setEditForm({
        name: '', location: '', description: '', imgSrc: '', amount: '', rating: '', categoryId: ''
      });
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating book', error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8080/api/books/delete/${bookId}`);
      setBooks(books.filter(book => book.id !== bookId));
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  return (
    <div className="turf-mana">
      <AdminNavbar />

      <div className="turf-management">
        <h1>Manage Books</h1>
        <button onClick={() => setShowAddModal(true)} className="book-action-button">Add Book</button>

        {/* Table View */}
        <table className="book-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(books) && books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.location}</td>
                <td>{book.description}</td>
                <td>${book.amount}</td>
                <td>{book.rating}</td>
                <td>{book.category ? book.category.name : 'N/A'}</td>
                <td>
                  {book.imgSrc && <img src={`data:image/jpeg;base64,${book.imgSrc}`} alt={book.name} className="book-image" />}
                </td>
                <td>
                  <button onClick={() => {
                    setEditingBook(book);
                    setEditForm({
                      name: book.name,
                      location: book.location,
                      description: book.description,
                      imgSrc: book.imgSrc,
                      amount: book.amount,
                      rating: book.rating,
                      categoryId: book.category ? book.category.id : ''
                    });
                    setShowEditModal(true);
                  }} className="book-action-button">Edit</button>
                  <button onClick={() => deleteBook(book.id)} className="book-delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
                <select
                  value={newBook.categoryId}
                  onChange={(e) => setNewBook({ ...newBook, categoryId: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
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
                <select
                  value={editForm.categoryId}
                  onChange={(e) => setEditForm({ ...editForm, categoryId: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <button onClick={updateBook} className="book-action-button">Update Book</button>
              <button onClick={() => setShowEditModal(false)} className="book-close-modal-button">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TurfManagement;
