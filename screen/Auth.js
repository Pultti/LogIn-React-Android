import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import MainAppBar from '../components/MainAppBar'; // Adjust the path as necessary

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showError, setShowError] = useState({ username: false, password: false });

  const validateAndSubmit = () => {
    setShowError({
      username: formData.username.length === 0,
      password: formData.password.length < 8,
    });

    if (formData.username.length > 0 && formData.password.length >= 8) {
      // TODO: Implement the submit logic
      console.log('Form data:', formData);
      setFormData({ username: '', password: '' }); // Clear form data
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <MainAppBar title="Login" />
      <View style={styles.loginContainer}>

           <TextInput
          // ... other props
          label="Username"
          value={formData.username}
          onChangeText={text => setFormData({ ...formData, username: text })}
          style={[styles.inputField, showError.username && styles.errorInput]}
          underlineColor="blue"
          activeUnderlineColor="blue"
          error={showError.username}
          theme={{ colors: { primary: 'blue', error: 'red' } }}
        />
        <View style={styles.secondaryUnderline} />
        {showError.username && <Text style={styles.errorText}>Username is required.</Text>}
     
        <TextInput
          label="Password"
          value={formData.password}
          onChangeText={text => setFormData({ ...formData, password: text })}
          style={[styles.inputField, showError.password && styles.errorInput]}
          underlineColor="blue"
          activeUnderlineColor="blue"
          secureTextEntry
          error={showError.password}
          theme={{ colors: { primary: 'blue', error: 'red' } }}
        />
        {showError.password && <Text style={styles.errorText}>Password must be at least 8 characters long.</Text>}
        <TouchableOpacity style={styles.submitButton} onPress={validateAndSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginTitle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    paddingTop: 60,
  },
  loginContainer: {
    marginHorizontal: 10, // Add horizontal margins to the container
    marginTop: 30,
    // ... other styles
  },
  inputField: {
    backgroundColor: 'transparent', // Ensure the TextInput has a transparent background
    marginBottom: 12,
    paddingHorizontal: 10, // Adjust as necessary
    // Removed borderBottomWidth and borderBottomColor since we use underlineColor in TextInput
  },
  errorInput: {
    // Define styles for the error state if needed
  },
  submitButton: {
    backgroundColor: 'purple',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    paddingTop: 2,
  },
});

export default Login;