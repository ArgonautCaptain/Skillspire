import { Routes, Route, Link, Navigate } from 'react-router-dom'
import UsersIndex from './components/UsersIndex'
import UserShow from './components/UserShow'
import UserForm from './components/UserForm'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UsersIndex />} />
        <Route path="/users/new" element={<UserForm mode="new" />} />
        <Route path="/users/:id" element={<UserShow />} />
        <Route path="/users/:id/edit" element={<UserForm mode="edit" />} />
      </Routes>
    </div>
  )
}

export default App
