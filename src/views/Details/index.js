import { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./styles.css"
const Details = () => {
    const navigate = useNavigate()
    const [detallepokemon, setDetallePokemon] = useState([])
    const { id } = useParams()
    let pokemonDetalles = `https://pokeapi.co/api/v2/pokemon/${id}`
    useEffect(() => {
        try {
            const llamandoDetallePokemon = async()=>{
                const response = await fetch(pokemonDetalles)
                const data = await response.json();
                setDetallePokemon(data)
                console.log(data)
            }
            llamandoDetallePokemon().catch(null)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleClickVolverALista=(e)=>{
        e.preventDefault()
        navigate("/")
    }
  return (
    <div className='details'>
        <h1 className='details-title'>Detalles del Pokemón</h1>
        
        {
            detallepokemon?(
                <div className='details-container'>
                    <div className='details-container-left'>
                        <img className='details-container-left-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                            alt="imagen del pokemon" 
                            />
                    </div>
                    <div className='details-container-right'>
                        <h3 className='details-container-right-title'>Información</h3>
                        <div className='details-container-right-parts'>
                            <div className='details-container-right-one-part'>
                                <p className='details-container-right-content'>{`Nombre: ${detallepokemon?.name}.`}</p>
                                <p className='details-container-right-content'>{`Peso: ${detallepokemon?.weight}kgs.`}</p>
                                <p className='details-container-right-content'>{`Altura: ${detallepokemon?.height}cms.`}</p>
                                <p className='details-container-right-content'>{`Experiencia base: ${detallepokemon?.base_experience}`}</p>
                                <div className='details-container-right-content-tipo'>
                                    Tipo: {
                                        detallepokemon.types?.map((tipo, index)=>{
                                            return(
                                                <div className='pokemon-type' key={index}>
                                                    <p> {tipo.type.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='details-container-right-content-abilities'>
                                    Habilidades:{
                                        detallepokemon.abilities?.map((habilidades, index)=>{
                                            return(
                                                <div className='pokemon-abilities' key={index}>
                                                    <p>{habilidades.ability.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            
                                <div                                                   
                                    className='details-container-right-content-base-stats'
                                >
                                    Estadísticas base:{
                                        detallepokemon.stats?.map((estadisticas,index)=>{
                                            return(
                                                <div className='pokemon-base-stats' key={index}>
                                                    <p>{`${estadisticas.stat.name}: `}</p>
                                                    <p>{estadisticas.base_stat}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='details-container-right-two-part'>
                                <div className='details-container-right-content-moves' >
                                    Movimientos:{
                                        detallepokemon.moves?.map((poderes, index)=>{
                                            if (index<10) {
                                            return(
                                                <div className='pokemon-moves' key={index}>
                                                    <p>{poderes.move.name}</p>
                                                </div>
                                            )
                                            }   
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <span></span>
            )
        }
        <button className='btn-details' onClick={handleClickVolverALista} >Volver a la Lista</button>   
    </div>

  )
}

export default Details