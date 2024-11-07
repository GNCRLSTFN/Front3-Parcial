import React, { useState } from 'react'
import Card from './Card'
import './styles/Form.css'

const Form = () => {
    const [user, setUser] = useState({
        nombre: "",
        cancion: "",
        artista: ""
    })
    const [mostrarCard, setMostrarCard] = useState(false)
    const [error, setError] = useState("")
    const handleSubmit = (event) =>{
        event.preventDefault()
        let regExGlobal = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/
        if(
            user.nombre.trim().length > 3 && !user.nombre.startsWith(" ") && user.cancion.length > 6 && regExGlobal.test(user.nombre)
        ){
            setMostrarCard(true)
            setError("")
        }
        else{
            setError("Por favor chequea que la información sea correcta")
            setMostrarCard(false)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Ingresa tu nombre!</label>
                <input type="text" onChange={(event) => setUser({...user, nombre : event.target.value})}/>
                <label>Dime tu canción favorita:</label>
                <input type="text" onChange={(event) => setUser({...user, cancion : event.target.value})} />
                <label>Dime el artista que estés escuchando últimamente:</label>
                <input type="text" onChange={(event) => setUser({...user, artista : event.target.value})}/>
                <button>Enviar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {mostrarCard ? <Card className="card" nombre ={user.nombre} cancion = {user.cancion} artista = {user.artista}/> : null}
        </div>
    )
}

export default Form
