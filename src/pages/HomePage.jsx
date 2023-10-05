import { React,useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'


const HomePage = () => {


  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))   
    navigate('/pokedex')
  }

  

  return (
    <div className="home">
        <h1 className="home__pokedex">Pokedex</h1>
        <h2 className="home__h2">Hi Trainer!</h2>
        <p className="home__p">To start, please, enter your trainer name.</p>
        <form className="home__form" onSubmit={handleTrainer}>
            <input className="home__input" ref={inputTrainer} type="text" />
            <button className="home__button">Start</button>
        </form>
    </div>
  )
}

export default HomePage