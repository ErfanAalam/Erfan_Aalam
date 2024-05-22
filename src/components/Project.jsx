import React from 'react'
import './Project.css'
import Card from './Card'
import {motion} from 'framer-motion'

const Project = () => {

    let spotify_url="/src/assets/spotify.webp"
    let pokemon_url = "/src/assets/pokemon.png"
    let moviefinder_url = "/src/assets/moviefinderlogo.jpg"

  return (
    <div id='projects'>
    <h1 className="project">Projects</h1>

    <ul className="cards">


    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
    <Card url={spotify_url} title="Spotify-Clone App" desc="This is a clone of a spotify website it coontains songs of local storage and we can play and pause the song. we can also control the timing of the song and can go to the next and the prev song it also contains multiple albums that have diffrent songs. this is created using HTML, CSS and Javascript" code="https://github.com/ErfanAalam/Spotify-clone" />
    </motion.div>



    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
    <Card url={pokemon_url} title="Pokemon gallery" desc="This is a react based application build using pokemon api where we fetch the pokemon image and their detals and display them on the card. first 20 pokemons are displayed and we can display more cards by clicking on the display more"  code="https://github.com/ErfanAalam/Pokeman-gallery-withReact" />
    </motion.div>

    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
    <Card url={moviefinder_url} title="Movie Finder" desc="This is reacty based application in which you can find movies and can watch their trailer. In this applicatio all the movies and their trailer is fethed from the API. in this movies has also their poseter as cover image" code="https://github.com/ErfanAalam/Find-Movies" />
    </motion.div>
  
</ul>
    </div>
  )
}

export default Project
