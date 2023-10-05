import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/pokedexPage/PokeCard"
import SelectType from "../components/pokedexPage/SelectType"
import './styles/PokedexPage.css'

const PokedexPage = () => { 

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  console.log(typeSelected)

  const trainer = useSelector(store => store.trainer)

  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemons()
    } else { 
      getTypePokemon(typeSelected)
    }
    getPokemons()
  }, [typeSelected])

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div className="pokedex">
     <p className="pokedex__name">Hi {trainer}</p>
     <p className="pokedex__name__text">Aqui encontraras tu pokemon favorito</p>
     <form className="pokedex__form" onSubmit={handleSearch}>
      <input className="pokedex__input" ref={inputSearch} type="text" value="Ingresa el nombre de tu Pokemon" onfocus="borrarTexto()"/>
      <button className="pokedex__button">Search</button>
     </form>
     <SelectType 
     setTypeSelected={setTypeSelected}/>
      <div className="pokedex__div">
         {
           pokeFiltered?.map(poke => (
            <PokeCard
              key ={poke.url}
              url={poke.url}
            />
           ))
         }
      </div> 
    </div>
    
  )
}

export default PokedexPage