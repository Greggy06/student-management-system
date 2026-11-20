import { Routes, Route } from 'react-router-dom';
import StudentList from './student-management/StudentList';
import StudentForm from './student-management/StudentForm';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/edit-student/:id" element={<StudentForm />} />
      </Routes>
    </div>
  );
}

export default App;
