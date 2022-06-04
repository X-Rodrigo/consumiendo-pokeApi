
import "./styles.css"
const LocalStoragePokemons = ({storagepokemons,imgprev}) => {
    

    
  return storagepokemons.map((datos, index)=>(
        <div key={index} className="local-storage-pokemons">
            <h2 className="local-storage-pokemons-title">Pokemones Registrados</h2>
            <div className="local-storage-pokemons-details">
                <div className="local-storage-pokemons-details-left">
                    <p className="local-storage-pokemons-details-element">
                        Nombre:<br/>{datos.namepokemon}
                    </p>
                    <p className="local-storage-pokemons-details-element">
                        Descripción:<br/>{datos.descpokemon}
                    </p>
                    <p className="local-storage-pokemons-details-element">
                        Habilidades:<br/>{datos.abilitiespokemon}
                    </p>
                </div>
                <div className="local-storage-pokemons-details-right">
                    <img 
                        className="local-storage-pokemons-details-img" 
                        src={imgprev} 
                        // src={imageprev()}
                        alt="imagen-local-storage-pokemon" 
                    />
                </div>
            </div>
            <div className="format-json">
                <h2>FormatoJSON</h2>
                <p className="format-json-content">
                    {/* {formatjson} */}
                    </p>
            </div>
            
        </div>
    )
  )

}

export default LocalStoragePokemons