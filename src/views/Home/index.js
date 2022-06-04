import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CardListPokemons from "../../components/CardListPokemons/CardListPokemons"
import Loader from "../../components/Loader/Loader";

import "./styles.css";
const Home = () => {
    const [listapokemones, setListaPokemones] = useState([]);
    const [cargandolist, setCargandoList] =useState(true);
    const [nombrePokemon, setNombrePokemon] = useState("")
    const [arreglonombres, setArregloNombres] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        try {
            const llamandoPokemones = async()=>{
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
                const data = await response.json();
                setListaPokemones(data.results)
                setArregloNombres(data.results)
                console.log(listapokemones)
            }
            llamandoPokemones()
            if (listapokemones) {
                setTimeout(() => {
                    setCargandoList(false)
                }, 1000);
            }
            
        } catch (error) {
            console.log(error)
        }
    }, [])  

    const Search = (filtro) => {
        let results = arreglonombres.filter((nombrecito) => nombrecito.name.includes(filtro.toLowerCase()))
        console.log(results)
        setListaPokemones(results)
    }

    const handleChangeSearch = (e) => {
        setNombrePokemon(e.target.value)
        Search(e.target.value)
    };

    const handleClickRegistrar = (e) => {
        e.preventDefault()
        console.log("funciona")
        navigate("/registrandoPokemon")
    }
    
  return (
    <div className="pokemons-list">
        <div className="pokemons-list-header">
            <h1 className="pokemons-list-title">Lista de Pokemones</h1>
            <input onChange={handleChangeSearch} value={nombrePokemon} className="search-pokemons-list-header" type="text" placeholder="Buscar Pokemon" />
            <input onClick={handleClickRegistrar} className="btn-pokemons-list-header" type="submit" value="Registrar Pokemon" />
        </div>
        {
            !cargandolist?(
                
            listapokemones?.map( (pokemoncitos) =>{
                return(
                    <div className="pokemons-list-container" key={pokemoncitos.name}>
                        <CardListPokemons
                            name={pokemoncitos.name}
                            url={pokemoncitos.url}
                        />
                    </div>
                );
            })
            ):(
                <Loader
                    title="Cargando Pokemones..."
                />
            )
        }
    </div>
  )
}

export default Home