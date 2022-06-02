import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Configuracoes from './src/telas/Configuracoes';
import Home from './src/telas/Home';
import {Audio} from 'expo-av'




const Stack = createNativeStackNavigator();

function App() {
  async() =>{
    Audio.setAudioModeAsync({
 
    })

  }

  return (


   <NavigationContainer>
   <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Home">
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Configuracoes" component={Configuracoes} />
   </Stack.Navigator>
 </NavigationContainer>


  );
}

export default App;

/*import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/Hello.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({ }); */