import React from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

class Search extends React.Component {
    render(){
        return (
            <View style={{ marginTop: 25 }}>
                <TextInput style={ styles.textinput } placeholder='Titre du film'/>
                <Button title="Rechercher" onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 2,
        paddingLeft: 5
    }
});
export default Search