/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Nearby from './views/Nearby';
import Home from './views/Home';
import LeaderBoard from './views/Leaderboard';

const Stack = createStackNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Nearby" component={Nearby} />
                    <Stack.Screen name="Leaderboard" component={LeaderBoard} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
