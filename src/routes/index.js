import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "../views/Home"
import Details from "../views/Details"
import FormAddPokemon from "../components/FormAddPokemon/FormAddPokemon"
const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalles/pokemon/:id" element={<Details />} />
            <Route path="/registrandoPokemon" element={<FormAddPokemon />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp