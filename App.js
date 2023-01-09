import React, { useContext } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TodoScreen from './screens/TodoScreen';
import Colors from './constants/Colors';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import {IconButton} from './components/ui/IconButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.inverse },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.inverse },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Todo" component={TodoScreen} options={{
        headerTintColor: 'white',
        headerRight: ({tintColor}) => <IconButton icon={faSignOut} color={tintColor} onPress={authCtx.logout}/>
      }} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack/>}
      </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}

StatusBar.setBarStyle('light-content', true);
library.add(fas, faSignOut);

const styles = StyleSheet.create({
  
});