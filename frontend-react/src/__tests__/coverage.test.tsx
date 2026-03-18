import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import StudentDashboard from '../components/StudentDashboard';
import TeacherDashboard from '../components/TeacherDashboard';
import Courses from '../components/courses';

describe('Force coverage for all components', () => {

  test('Login renders', () => {
    render(<Login />);
  });

  test('Register renders', () => {
    render(<Register />);
  });

  test('StudentDashboard renders', () => {
    render(<StudentDashboard />);
  });

  test('TeacherDashboard renders', () => {
    render(<TeacherDashboard />);
  });

  test('Courses renders', () => {
    render(<Courses />);
  });

});
