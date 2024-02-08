import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import { Books } from './Books'
import { CreateBook } from './CreateBook'
import { UpdataeBook } from './UpdataeBook'
import { Nav } from './Nav'


export const App = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Books />}></Route>
        <Route path='/create' element={<CreateBook />}></Route>
        <Route path='/update' element={<UpdataeBook />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

