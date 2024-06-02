import React, { useEffect } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Delay for 3 seconds to simulate a splash screen
    setTimeout(() => {
      // Navigate to your main screen or do any necessary initialization
      console.log('Splash screen done, navigating to main screen...');
      // You can use navigation here to navigate to the main screen
      // e.g., navigation.replace('MainScreen');
    }, 5000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')} // Change to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/Logo.png')} // Change to your splash screen image
          style={styles.splashImage}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '50%',
    height: '30%',
  },
});

export default SplashScreen;
