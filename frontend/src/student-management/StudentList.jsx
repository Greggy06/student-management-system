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
    const confirmed = window.confirm('Are you sure you want to delete this student?');
    if (confirmed) {
      await axios.delete(`${API}/delete/${id}`);
      fetchStudents();
    }
  };

  return (
    <>
      <div className="app-header">
        <h2>Student Management</h2>
        <button className="btn btn-primary" onClick={() => navigate('/add-student')}>
          + Add Student
        </button>
      </div>

      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-message">
                  No students found. Click "+ Add Student" to create one.
                </td>
              </tr>
            ) : (
              students.map((s, i) => (
                <tr key={s._id}>
                  <td>{i + 1}</td>
                  <td><strong>{s.name}</strong></td>
                  <td>{s.email}</td>
                  <td>{s.age}</td>
                  <td>
                    <button className="btn btn-edit" onClick={() => navigate(`/edit-student/${s._id}`)}>
                      Edit
                    </button>
                    <button className="btn btn-delete" onClick={() => handleDelete(s._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
