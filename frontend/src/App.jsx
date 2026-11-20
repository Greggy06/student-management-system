import { Routes, Route } from 'react-router-dom';
import StudentList from './student-management/StudentList';
import StudentForm from './student-management/StudentForm';

function App() {
  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Student Management</h2>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/edit-student/:id" element={<StudentForm />} />
      </Routes>
    </div>
  );
}

export default App;
