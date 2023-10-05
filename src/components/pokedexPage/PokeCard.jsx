import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {

    const [ pokemon, getPokemon ]= useFetch(url)
    const navigate = useNavigate()

    useEffect(() => {
        getPokemon()
    },[])
    
    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    const firstType =pokemon?.types[0].type.name

  return (
    <article className={`poke ${firstType}-border`} onClick={handleNavigate}>
        <header className={`poke__header ${firstType}-gradient`}>
            <img className='poke__image' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='poke__body'>
            <h3 className={`poke__name ${firstType}-color`}> {pokemon?.name}</h3>
            <ul className='poke__types'> 
                {
                    pokemon?.types.map(typeInfo => (
                        <li className='poke__typename' key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr className='poke__hr'/>
            <ul className='poke__stats'>
                {
                    pokemon?.stats.map(statInfo => (
                        <li className='poke__stat' key={statInfo.stat.url}> 
                        <h4 className='poke__stat__name'>{statInfo.stat.name}</h4>
                        <span className={`poke__stat__value ${firstType}-color `}> {statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard  