import { useState,useEffect } from 'react'
import LocalStoragePokemons from '../LocalStorage/LocalStoragePokemons'
import "./styles.css"

const obteniendoData=()=>{
  let JsonData = localStorage.getItem("StoragePokemons")
  if (JsonData) {
      return JSON.parse(JsonData)
  }
  else{
      return []
  }
}
const FormAddPokemon = () => {
  const [errorimage, setError] = useState("");
  const [imgprev, setImgPrev] = useState("")
  const [storagepokemons, setStoragePokemons] = useState(obteniendoData())

  const [namepokemon, setNamePokemon] = useState("")
  const [descpokemon, setDescPokemon] = useState("")
  const [abilitiespokemon, setAbilitiesPokemon ] = useState("")
  const [imgpokemon, setImgPokemon] = useState([])
  
  
  const handleSubmitAddPokemon=(e)=>{
      e.preventDefault()
      let datosPokemon ={
        namepokemon,
        descpokemon,
        abilitiespokemon,
        imgpokemon
      }
      setStoragePokemons([...storagepokemons, datosPokemon])

      setNamePokemon("")
      setDescPokemon("")
      setAbilitiesPokemon("")
      setImgPokemon("")
      if (imgpokemon) {
        const imageprev=()=>{
                const reader = new FileReader();
                reader.onload=()=>{
                  if (reader.readyState ===2) {
                    setImgPrev(reader.result)
                    setImgPokemon(reader.result)
                  }
                }
                reader.readAsDataURL(imgpokemon)
                console.log(imgpokemon.name)
        }
        imageprev()
      }
  }
  useEffect(() => {
    localStorage.setItem('StoragePokemons', JSON.stringify(storagepokemons))
    
  }, [storagepokemons])
  
  return (
    <div className="add-pokemon">
      {
        errorimage?(
          <div>{errorimage}</div>
        ):(
        <form className="add-pokemon-container-left" 
              onSubmit={handleSubmitAddPokemon}
        >
            <h2 className="add-pokemon-title">Registrando Pokemon</h2>
            <input 
                className="add-pokemon-input" 
                type="text" 
                placeholder="Nombre"
                name="NamePokemon"
                value={namepokemon}
                onChange={(e)=>{setNamePokemon(e.target.value)}} 
            />

            <input 
                className="add-pokemon-input" 
                type="text" 
                placeholder="Descripción"
                name="DescPokemon"
                value={descpokemon}
                onChange={(e)=>{setDescPokemon(e.target.value)}} 
            />

            <input 
                className="add-pokemon-input" 
                type="text" 
                placeholder="Habilidades"
                name="AbilitiesPokemon"
                value={abilitiespokemon}
                onChange={(e)=>{setAbilitiesPokemon(e.target.value)}}   
            />

            <div className="add-pokemon-select-container">
                <label htmlFor="files">Agrega una imagen a tu pokemon</label>
                <input  
                    id="files" 
                    type="file" 
                    name="ImgPokemon"
                    accept="image/*"
                    onChange={(e)=>{setImgPokemon(e.target.files[0])}}
                />
            </div>
            <div className="btns-add-pokemon-container">
                <input className="btn-add-pokemon" type="submit" value="Guardar" />
                <input className="btn-cancel-add-pokemon" type="submit" value="Cerrar"/>
            </div>
        </form>
        )
      }
      <div className="add-pokemon-container-right">
        {
          storagepokemons.length < 1 ?(
            <h2>No hay pokemones registrados</h2>
              
          ):(
            <LocalStoragePokemons
            storagepokemons={storagepokemons}
            imgprev={imgprev}
            />
          )
        }
        
      </div>
    </div>
  )
}

export default FormAddPokemon