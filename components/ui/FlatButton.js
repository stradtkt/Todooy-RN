import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

function FlatButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.faceBlue,
    shadowColor: Colors.inverse,
    shadowOffset: {height: 2, width: 0},
    elevation: 4,
    shadowRadius: 6,
    shadowOpacity: 0.7,
    borderRadius: 6,
    margin: 6
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
  },
});