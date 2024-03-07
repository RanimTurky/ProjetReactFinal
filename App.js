import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GestureHandlerRootView} from 'react-native-gesture-handler'



const Test=()=>{

    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Bienvenue dans l'éditeur de photos !
      </Text>
      <Button title="Sélectionner une photo"  />
    </View>
  );
}
export default function App() {

  const Stack=createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="test">
        <Stack.Screen name="test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
