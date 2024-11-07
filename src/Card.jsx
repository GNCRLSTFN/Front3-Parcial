import './styles/Card.css'

function Card({nombre, cancion, artista}) {
  return (
    <div className='card'>
      <h2>Hola {nombre}!</h2>
      <h2>Tu canción favorita es: {cancion}</h2>
      <h2>Tu artista favorito del momento es: {artista}</h2>
    </div>
  );
}

export default Card;
