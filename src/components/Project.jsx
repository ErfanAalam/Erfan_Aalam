import React from 'react'
import './Project.css'
import Card from './Card'

const Project = () => {

  let spotify_url = "public/assets/spotify.png"
  let pokemon_url = "public/assets/pokemon.png"
  let moviefinder_url = "public/assets/moviefinderlogo.jpg"

  return (
    <div id='projects'>
      <h1 className="project">Projects</h1>

      <ul className="cards">


        <div>
          <Card url={spotify_url} title="Spotify-Clone App" desc="This is a clone of a spotify website it coontains songs of local storage and we can play and pause the song. we can also control the timing of the song and can go to the next and the prev song it also contains multiple albums that have diffrent songs. this is created using HTML, CSS and Javascript" code="https://github.com/ErfanAalam/Spotify-clone" />
        </div>

        <div>
          <Card url={pokemon_url} title="Pokemon gallery" desc="This is a react based application build using pokemon api where we fetch the pokemon image and their detals and display them on the card. first 20 pokemons are displayed and we can display more cards by clicking on the display more" code="https://github.com/ErfanAalam/Pokeman-gallery-withReact" />
        </div>

        <div>
          <Card url={moviefinder_url} title="Movie Finder" desc="This is reacty based application in which you can find movies and can watch their trailer. In this applicatio all the movies and their trailer is fethed from the API. in this movies has also their poseter as cover image" code="https://github.com/ErfanAalam/Find-Movies" />
        </div>

      </ul>
    </div>
  )
}

export default Project
