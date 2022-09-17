const Card = ({ name, status, species, image, setImageUp }) => {
    return (
        <div className="color-square">
            <img src={image} alt="" onClick={() => setImageUp(image)}/>
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
        </div>
    )
  }
  
  export default Card;
  