import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching data, initializing app)
    const initializeApp = async () => {
      // Simulating a delay (you can replace this with your actual initialization logic)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Navigate to the main screen or any other screen after the splash screen
      navigation.replace('MainScreen');
    };

    initializeApp();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./path-to-your-splash-image.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set the background color as needed
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;