import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './screens/home'
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import NotesIndex from './screens/notes/index'
import UserEdit from './screens/users/edit'
import PrivateRoute from './components/auth/private_route'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/notes' element={<PrivateRoute />}>
          <Route exact path='/notes' element={<NotesIndex />} />
        </Route>
        <Route exact path='/users/edit' element={<PrivateRoute />}>
          <Route exact path='/users/edit' element={<UserEdit />} />
        </Route>
      </Routes>
    </Router>
  )
}