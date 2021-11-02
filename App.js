import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigation } from '@react-navigation/stack';
import { createStack } from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.screen name="HomeScreen" component={HomeScreen} />
            <Stack.screen name="StartMapScreen" component={StartMapScreen} />
            <Stack.screen name="DailyPicScreen" component={DailyPicScreen} />
            <Stack.screen name="SpaceCraftScreen" component={SpaceCraftScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

const Stack = createStackNavigator();
