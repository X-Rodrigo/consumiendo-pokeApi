
import { useNavigate } from "react-router-dom"
import "./styles.css"
const CardListPokemons = ({name,url}) => {
    const obtenerId = () => url.split("/")[6];
    const navigate = useNavigate()
    const handleClickVerDetalle=(e)=>{
        e.preventDefault()
        navigate(`/detalles/pokemon/${obtenerId()}`)
    }
    
    
  return (
    <div className="card-list-pokemons">
        {
        //  datospoke.map( pokedatos=>)
        <>
          <p className="card-list-pokemons-name">{name}</p>
          <img className="card-list-pokemons-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${obtenerId()}.svg`}alt="imagen-pokemones" />
          <button className="btn-card-list-pokemons" onClick={handleClickVerDetalle} >Ver Detalles</button>
        </>
        }
    </div>
  )
}

export default CardListPokemons