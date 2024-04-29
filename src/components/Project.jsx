import React from 'react'
import './Project.css'
import Card from './Card'
import {motion} from 'framer-motion'

const Project = () => {

    let spotify_url="/src/assets/spotify.webp"
    let pokemon_url = "/src/assets/pokemon.png"
    let ecommerce_url = "/src/assets/ecommerce.png"

  return (
    <div id='projects'>
    <h1 className="project">Projects</h1>

    <ul className="cards">


    <motion.div
    initial={{opacity:0,x:-400}}
    whileInView={{opacity:1,x:0}}
    transition={{duration:1}}
    >
    <Card url={spotify_url} title="Spotify-Clone App" desc="This is a clone of a spotify website it coontains songs of local storage and we can play and pause the song. we can also control the timing of the song and can go to the next and the prev song it also contains multiple albums that have diffrent songs. this is created using HTML, CSS and Javascript" code="https://github.com/ErfanAalam/Spotify-clone" />
    </motion.div>



    <motion.div
    initial={{opacity:0,y:400}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}
    >
    <Card url={pokemon_url} title="Pokemon gallery" desc="This is a react based application build using pokemon api where we fetch the pokemon image and their detals and display them on the card. first 20 pokemons are displayed and we can display more cards by clicking on the display more"  code="https://github.com/ErfanAalam/Pokeman-gallery-withReact" />
    </motion.div>

    <motion.div
    initial={{opacity:0,x:400}}
    whileInView={{opacity:1,x:0}}
    transition={{duration:1}}
    >
    <Card url={ecommerce_url} title="Shoes Ecommerce" desc="This is reacty based application containing collection of shoes of diffrent brands in this we can filters the products based on their color, brand name, size and price  it also have rating of the products it contains both mens and womens collection that are sotred locally" code="https://github.com/ErfanAalam/shoes-ecommerce" />
    </motion.div>
  
</ul>
    </div>
  )
}

export default Project
