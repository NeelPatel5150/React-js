// Create a react app to generate random joke using AXIOS to make API request
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function PB_432 (){
    const [joke, setJoke] = useState("");
    function handleclick(){
        axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then((response)=>{
            setJoke(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return(
        <>
            <h1>{joke.setup}</h1>
            <h1>{joke.punchline}</h1>
            <button onClick={handleclick}>Get Joke</button>
        </>
    )
}
export default PB_432
