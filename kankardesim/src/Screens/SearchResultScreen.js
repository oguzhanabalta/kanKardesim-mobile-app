import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'

const SearchResultScreen = ({navigation, route}) => {
    return (
        <View>
            <Header title={route.params.item} type="arrow-left" navigation={navigation}/>
          <View style={styles.container}>
            
            <Text>SearchResultScreen {route.params.item}</Text>
        </View>  
        </View>
        
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
