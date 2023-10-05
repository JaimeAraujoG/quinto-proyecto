import { Route, Routes  } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoudes from './pages/ProtectedRoudes'


function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route element={ <ProtectedRoudes/> }>          
          <Route path='/pokedex' element={ <PokedexPage/> }/>
          <Route path='/pokedex/:id' element={ <PokedexIdPage/> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
