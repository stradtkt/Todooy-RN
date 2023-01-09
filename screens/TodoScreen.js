import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';



const TodoScreen = () => {
  return (
   <LinearGradient colors={[Colors.inverse,Colors.primary,Colors.white,Colors.primary,Colors.inverse ]} style={styles.backgroundLinear}>
     <View>
        <Title>Todooy</Title>
     </View>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
   backgroundLinear: {
     flex: 1
   }
 });

export default TodoScreen;