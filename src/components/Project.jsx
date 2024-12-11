import React from 'react'
import './Project.css'
import Card from './Card'

const Project = () => {

  let spotify_url = "assets/spotify.png"
  let pokemon_url = "assets/pokemon.png"
  let moviefinder_url = "assets/moviefinderlogo.jpg"
  let chatroom_url = "assets/chatroom.jpeg"
  let ecommerce_url = "assets/ecommmerce.png"
  let weather_url = "assets/weatherapp.webp"
  let api_url = "assets/apibackend.png"
  let chatbot_url = "assets/geminiapp.webp"

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
          <Card url={moviefinder_url} title="Movie Finder" desc="This is react based application in which you can find movies and can watch their trailer. In this applicatio all the movies and their trailer is fethed from the API. in this movies has also their poseter as cover image" code="https://github.com/ErfanAalam/Find-Movies" />
        </div>

        <div>
          <Card url={chatroom_url} title="Chat Room" desc="This is react and express based application in which you can join room and chat with the friends in a same group yet not completed for specific person only based on a group chat. emplemented by scoket and express" code="https://github.com/ErfanAalam/ChatRoom-frontend" />
        </div>

        <div>
          <Card url={ecommerce_url} title="Ecommerce website" desc="This is MERN based application based on ecommerce application in which we can add items to our cart, can create our account and add address for shipping, after confirm order mail will come in our given gmail id." code="https://github.com/ErfanAalam/Ecommerce-frontend" />
        </div>

        <div>
          <Card url={weather_url} title="Weather app" desc="This is Flask based project which is fraework of pyton in tis we can see the weather information of any city in this i use the weatherapp API" code="https://github.com/ErfanAalam/weatherappUsingFlask" />
        </div>

        <div>
          <Card url={api_url} title="Products API" desc="This is Express js based project in this i create some REST api of products hich can be use in another project as a API" code="https://github.com/ErfanAalam/ProductStoreAPI-backend" />
        </div>
        <div>
          <Card url={chatbot_url} title="Gemini Chatbot" desc="This is react native based application in this I use the google gemini's API key and integrate it using axios and deploy it for the android devices" code="https://github.com/ErfanAalam/GeminiWithReactNative" />
        </div>

      </ul>
    </div>
  )
}

export default Project
