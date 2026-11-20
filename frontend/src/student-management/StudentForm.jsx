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
    <>
      <h3>{id ? 'Edit Student' : 'Add Student'}</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        <input placeholder="Age" type="number" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit">{id ? 'Update' : 'Add'}</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </>
  );
}

export default StudentForm;
