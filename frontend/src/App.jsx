import { Routes,Route } from "react-router-dom"
import Dasbord from "./composant/dasbord"
import Userliste from "./composant/listesuser"
import Ajouteruser from "./composant/ajouteruser"
import Updateuser from "./composant/updateuser"
function App() {


  return (
    <>
      <Routes>
       <Route path="/dasbord" element={<Dasbord />} />
       <Route path="/" element={<Userliste/>} />
       <Route path="add/" element={<Ajouteruser/>} />
       <Route path="/update/:id" element={<Updateuser/>} />
    </Routes>
    </>
  )
}

export default App
