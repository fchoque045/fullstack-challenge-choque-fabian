import { useEffect, useState } from "react";
import { getCharacters } from "../service";
import Card from "./Card";

const CardList = () => {
    const [charList, setCharList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [imageUp, setImageUp] = useState('');
    
    useEffect(() => {
        setIsLoading(true);
        getCharacters()
          .then((data) => setCharList(data.results))
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
      }, []);

    
      return (
        <>
            <img src={imageUp} alt="no hay imagen" />
            {isLoading && <h1>Loading</h1>}
            <div>
                {
                charList.map( char => 
                    <Card name={char.name} status={char.status} species={char.species} image={char.image} setImageUp={setImageUp} key={char.id}/>
                )
                }
            </div>
            </>
    );
  
  }
  
  export default CardList;