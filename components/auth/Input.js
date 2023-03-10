import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        autoCapitalize={'none'}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: Colors.white,
    marginBottom: 4,
    fontFamily: 'Questrial-Regular',
    fontWeight: 'bold',
  },
  labelInvalid: {
    color: Colors.danger,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Questrial-Regular',
    fontWeight: 'bold'
  },
  inputInvalid: {
    backgroundColor: Colors.danger,
  },
});