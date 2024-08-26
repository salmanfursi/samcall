import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import call from 'react-native-phone-call';

const Dialer = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCall = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('Error', 'Please enter a phone number');
      return;
    }

    const args = {
      number: phoneNumber,
      prompt: true, // This will show the native call prompt
    };

    call(args).catch(error => {
      console.error('Error making call:', error);
      Alert.alert('Error', 'Failed to initiate call. Are you using an emulator?');
    });
  };

  const handleEmulatorTest = () => {
    Alert.alert(
      'Emulator Test',
      `In a real device, this would call ${phoneNumber}. Since you're in an emulator, calling is not possible. Consider using a real device for full functionality testing.`
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />
      <Button title="Call" onPress={handleCall} />
      <Button title="Emulator Test" onPress={handleEmulatorTest} />
      <Text style={styles.note}>
        Note: Actual calling may not work in emulators. Use a physical device for full functionality.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  note: {
    marginTop: 20,
    fontStyle: 'italic',
    color: 'gray',
  },
});

export default Dialer;