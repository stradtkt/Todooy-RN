import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';




const Title = ({children}) => {
  return (
    <View>
        <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        color: Colors.info,
        textShadowColor: Colors.inverse,
        textShadowOffset: {height: 2, width: 0},
        textShadowRadius: 4,
        fontSize: 56,
        fontFamily: 'SignikaNegative-Bold',
        textAlign: 'center',
        marginVertical: '30%'
      }
});

export default Title;