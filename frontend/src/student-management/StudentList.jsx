import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:5000/student';

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get(`${API}/get`);
    setStudents(res.data);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete?');
    if (confirmed) {
      await axios.delete(`${API}/delete/${id}`);
      fetchStudents();
    }
  };

  return (
    <>
      <button onClick={() => navigate('/add-student')}>+ Add Student</button>
      <table border="1" cellPadding="8" width="100%" style={{ marginTop: '20px' }}>
        <thead>
          <tr><th>#</th><th>Name</th><th>Email</th><th>Age</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={s._id}>
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.age}</td>
              <td>
                <button onClick={() => navigate(`/edit-student/${s._id}`)}>Edit</button>
                <button onClick={() => handleDelete(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentList;
