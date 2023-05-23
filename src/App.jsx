import './App.css'
import Pokemon from './components/Pokemon'
import Pokemons from './components/Pokemons'
import UserInput from './components/UserInput'
import {Route, HashRouter, Routes} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element = {<UserInput/>}/>

          <Route element={<ProtectedRoutes/>}>
          <Route path='/pokemons' element={<Pokemons/>}/>
          <Route path='/pokemons/:id' element={<Pokemon/>}/>      
                
          </Route>

        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
