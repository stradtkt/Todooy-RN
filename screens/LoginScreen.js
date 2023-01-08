import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';
import AuthContent from '../components/auth/AuthContent';
import { StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <LinearGradient colors={[Colors.inverse,Colors.primary,Colors.white,Colors.primary,Colors.inverse ]} style={styles.backgroundLinear}>
      <AuthContent isLogin/>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundLinear: {
    flex: 1
  }
});

export default LoginScreen;