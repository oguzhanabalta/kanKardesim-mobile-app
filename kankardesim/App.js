import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { colors, parameters } from './src/Global/styles';
import SignInScreen from './src/Screens/authScreens/SignInScreen';


const Greeting = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor= {colors.statusBar}
      />
      <SignInScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default App;
