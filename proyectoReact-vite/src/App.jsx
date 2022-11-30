import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  let saludo= 'Bienvenido'
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={saludo}/>
    </div>
  )
}

export default App
