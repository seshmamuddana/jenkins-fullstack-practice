import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pet.css"; 
import config from "./config";

function App() {
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState({
    pid: "",
    name: "",
    type: "",
    age: "",
    breed: "",
  });

  const baseUrl = `${config.url}/petapi`;

  // Fetch all pets on load
  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await axios.get(`${baseUrl}/pet`);
      setPets(res.data);
    } catch (err) {
      console.error("Error fetching pets:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInsert = async () => {
    try {
      await axios.post(`${baseUrl}/insert`, form);
      fetchPets();
      setForm({ pid: "", name: "", type: "", age: "", breed: "" });
    } catch (err) {
      console.error("Error inserting pet:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${baseUrl}/update`, form);
      fetchPets();
      setForm({ pid: "", name: "", type: "", age: "", breed: "" });
    } catch (err) {
      console.error("Error updating pet:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/delete?pid=${id}`);
      fetchPets();
    } catch (err) {
      console.error("Error deleting pet:", err);
    }
  };

  return (
    <div className="container">
      <h2 className="title">🐾 Pet Management</h2>

      {/* Form */}
      <div className="form-container">
        <input
          type="text"
          name="pid"
          placeholder="ID"
          value={form.pid}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={form.type}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={form.breed}
          onChange={handleChange}
        />

        <div className="button-group">
          <button className="btn insert" onClick={handleInsert}>
            Insert
          </button>
          <button className="btn update" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>

      {/* Pet Table */}
      <table className="pet-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
            <th>Breed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.pid}>
              <td>{pet.pid}</td>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>{pet.age}</td>
              <td>{pet.breed}</td>
              <td>
                <button
                  className="btn edit"
                  onClick={() => setForm(pet)}
                >
                  Edit
                </button>
                <button
                  className="btn delete"
                  onClick={() => handleDelete(pet.pid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
