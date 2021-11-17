import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { SignInContextProvider } from './src/Contexts/authContext';
import { colors, parameters } from './src/Global/styles';
import RootNavigator from './src/Navigations/RootNavigator';
import SignInScreen from './src/Screens/authScreens/SignInScreen';
import WelcomeScreen from './src/Screens/authScreens/WelcomeScreen';


const App = () => {
  return (
    <SignInContextProvider>
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor= {colors.statusBar}
      />
      <RootNavigator/>
    </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default App;
