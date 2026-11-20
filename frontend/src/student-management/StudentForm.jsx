import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:5000/student';

function StudentForm() {
  const [form, setForm] = useState({ name: '', email: '', age: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`${API}/get`).then(res => {
        const student = res.data.find(s => s._id === id);
        if (student) setForm(student);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`${API}/update/${id}`, form);
    } else {
      await axios.post(`${API}/add`, form);
    }
    navigate('/');
  };

  return (
    <div className="form-card">
      <h3>{id ? 'Edit Student' : 'Add New Student'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            placeholder="e.g. Skipper Yamex"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="e.g. skipper@example.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            placeholder="e.g. 25"
            value={form.age}
            onChange={e => setForm({ ...form, age: e.target.value })}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {id ? 'Update Student' : 'Save Student'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
