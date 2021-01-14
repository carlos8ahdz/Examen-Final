import 'react-native-gesture-handler';
import React from 'react';
import LoginPage from './src/LoginPage';
import Home from './src/Home';
import ArtistPage from './src/ArtistPage';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root" >
    <Scene key="login" component={LoginPage} hideNavBar/>
    <Scene key="home" component={Home}  title="Lista de artistas"/>
    <Scene key="artistPage" component={ArtistPage} title="Artista"/>
  </Scene>
)

export default function App() {
  return (
    <Router scenes={scenes}/>
  )

  
   
  
}