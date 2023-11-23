import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
//import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  // const [appLoaded] = useFonts({
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  // });

  // if (!appLoaded) {
  //   return <AppLoading />;
  // }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setRoundNumber(0);
  }

  let screens = <StartGameScreen onPickNumber={pickedNumberHandler} />
  function gameOverHandler(roundNumber){
    setGameIsOver(true);
    setRoundNumber(roundNumber);
  }

  if (userNumber) {
    screens = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber){
    screens = <GameOverScreen
      userNumber={userNumber}
      roundNumber={roundNumber}
      onStartNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} 
      style={styles.rootElement}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootElement}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootElement}>
          {screens}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootElement: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.20
  }
});
