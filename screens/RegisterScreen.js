import React, { useContext, useState } from 'react';
import AuthContent from '../components/auth/AuthContent';
import { Alert, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';
import {createUser} from './../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';



const RegisterScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  const signupHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Failed Registration!', 'The registration failed, try again.');
      setIsAuthenticating(false); 
    }
  };
  if(isAuthenticating) {
    return <LoadingOverlay message="Creating user..."/>;
  }
  return (
    <LinearGradient colors={[Colors.inverse,Colors.primary,Colors.white,Colors.primary,Colors.inverse ]} style={styles.backgroundLinear}>
        <AuthContent onAuthenticate={signupHandler} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    backgroundLinear: {
      flex: 1
    }
  });

export default RegisterScreen;