import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';
import AuthContent from '../components/auth/AuthContent';
import { Alert, StyleSheet } from 'react-native';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  const loginHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token); 
    } catch (error) {
      Alert.alert('Authentication Failed!', 'We could not log you in please try again later.'); 
      setIsAuthenticating(false);
    }
  };
  if(isAuthenticating) {
    return <LoadingOverlay message="Signing in user..."/>;
  }
  return (
    <LinearGradient colors={[Colors.inverse,Colors.primary,Colors.white,Colors.primary,Colors.inverse ]} style={styles.backgroundLinear}>
      <AuthContent isLogin onAuthenticate={loginHandler}/>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundLinear: {
    flex: 1
  }
});

export default LoginScreen;