import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import './CategoryManagement.css';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: '', description: '', imgSrc: '', button: ''
  });
  const [editingCategory, setEditingCategory] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '', description: '', imgSrc: '', button: ''
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories/getall');
        if (response.data && Array.isArray(response.data)) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const deleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:8080/api/categories/delete/${categoryId}`);
      setCategories(categories.filter(category => category.id !== categoryId));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result.split(',')[1]); // Get Base64 string without data URL prefix
    };
    reader.readAsDataURL(file);
  };

  const addCategory = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/categories/add', newCategory);
      setCategories([...categories, response.data]);
      setNewCategory({
        name: '', description: '', imgSrc: '', button: ''
      });
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const updateCategory = async () => {
    try {
      await axios.put(`http://localhost:8080/api/categories/update/${editingCategory.id}`, editForm);
      setCategories(categories.map(category => 
        category.id === editingCategory.id ? { ...category, ...editForm } : category
      ));
      setEditingCategory(null);
      setEditForm({
        name: '', description: '', imgSrc: '', button: ''
      });
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="category-header-container">
        <h1>Manage Categories</h1>
        <button onClick={() => setShowAddModal(true)} className="category-open-modal-button">Add Category</button>
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="category-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="category-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Add Category</h2>
            <div className="category-modal-grid">
              <input
                type="text"
                placeholder="Name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Description"
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, (base64) => setNewCategory({ ...newCategory, imgSrc: base64 }))}
              />
              <input
                type="text"
                placeholder="Button"
                value={newCategory.button}
                onChange={(e) => setNewCategory({ ...newCategory, button: e.target.value })}
              />
            </div>
            <button onClick={addCategory} className="category-action-button">Add Category</button>
            <button onClick={() => setShowAddModal(false)} className="category-close-modal-button">Close</button>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {showEditModal && editingCategory && (
        <div className="category-modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="category-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Edit Category</h2>
            <div className="category-modal-grid">
              <input
                type="text"
                placeholder="Name"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
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
                type="text"
                placeholder="Button"
                value={editForm.button}
                onChange={(e) => setEditForm({ ...editForm, button: e.target.value })}
              />
            </div>
            <button onClick={updateCategory} className="category-action-button">Update Category</button>
            <button onClick={() => setShowEditModal(false)} className="category-close-modal-button">Close</button>
          </div>
        </div>
      )}

      <table className="category-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Button</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(categories) && categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                {category.imgSrc && <img src={`data:image/png;base64,${category.imgSrc}`} alt={category.name} className="category-img-preview" />}
              </td>
              <td>{category.button}</td>
              <td>
                <button
                  onClick={() => {
                    setEditingCategory(category);
                    setEditForm({
                      name: category.name,
                      description: category.description,
                      imgSrc: category.imgSrc,
                      button: category.button
                    });
                    setShowEditModal(true);
                  }}
                  className="category-action-button"
                >
                  Edit
                </button>
                <button onClick={() => deleteCategory(category.id)} className="category-action-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManagement;
