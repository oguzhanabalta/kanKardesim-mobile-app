import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Header from '../Components/Header'
import SearchResultCard from '../Components/SearchResultCard'
import { kanBekleyenData } from '../Global/data';


const SCREEN_WIDTH =Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
    return (
        <View>
            <Header title={route.params.item} type="arrow-left" navigation={navigation}/>
          <View style={styles.container}>
            
            <Text>SearchResultScreen {route.params.item}</Text>
            <SearchResultCard
                screenWidth = {SCREEN_WIDTH}
                hospitalImages= {kanBekleyenData[0].hospitalImages}
                kanGrubu={kanBekleyenData[0].kanGrubu}
                tarih={kanBekleyenData[0].tarih}
            />
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
