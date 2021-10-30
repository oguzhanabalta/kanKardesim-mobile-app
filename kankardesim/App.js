import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import { colors,parameters } from './src/Global/styles';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

const Greeting = (props) => {
  return (
    <View style={styles.center}>
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
      <Header title="KAN KARDEŞİM"/>
      <Greeting name='Kan' />
      <Greeting name='Kardeşim' />
      <Greeting name='Mobil' />
    </View>
  );
}



export default App;
