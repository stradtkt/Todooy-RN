import React from 'react';
import AuthContent from '../components/auth/AuthContent';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';



const RegisterScreen = () => {
  return (
    <LinearGradient colors={[Colors.inverse,Colors.primary,Colors.white,Colors.primary,Colors.inverse ]} style={styles.backgroundLinear}>
        <AuthContent />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    backgroundLinear: {
      flex: 1
    }
  });

export default RegisterScreen;