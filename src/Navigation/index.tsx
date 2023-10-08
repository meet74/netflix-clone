import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../pages/SplashScreen';
import StartupScreen from '../pages/StartupScreen';
import Login from '../pages/auth/Login';
import HomePage from '../pages/Home';

const Navigation: React.FC = () => {
  const MainStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();
  const HomeStack = createNativeStackNavigator();

  const AuthStackNav = () =>{
    return(
        <AuthStack.Navigator screenOptions={{headerShown:false, animation:"fade"}}>
        <AuthStack.Screen  name='Splash' component={SplashScreen}/>
        <AuthStack.Screen name='Start' component={StartupScreen}/>
        <AuthStack.Screen name='Login' component={Login}/>
    </AuthStack.Navigator>
    )
  }

  const HomeStackNav = () => {
    return(
      <HomeStack.Navigator screenOptions={{headerShown:false}}>
          <HomeStack.Screen name='HomePage' component={HomePage}/>
      </HomeStack.Navigator>
    )
  }
  return (
    <NavigationContainer>
        <MainStack.Navigator  screenOptions={{headerShown:false}}>
            <MainStack.Screen name='Auth' component={AuthStackNav}/>
            <MainStack.Screen name='Home' component={HomeStackNav}/>
        </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation