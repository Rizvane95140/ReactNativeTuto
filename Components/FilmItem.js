// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.image} >
                    <Text>Image du film</Text>
                </View>
                <View style={{flex:2, flexDirection: 'column', backgroundColor: 'green'}} >

                    <View style={{flex:1,flexDirection: 'row', backgroundColor: 'orange'}}>

                        <View style={styles.titre_film}>
                            <Text>Titre du film (Text)</Text>

                        </View>
                        <View style={styles.vote}>
                            <Text>Vote (Text)</Text>

                        </View>
                    </View>

                    <View style={styles.description} >
                        <Text>Description (Text)</Text>
                    </View>

                    <View style={styles.date} >
                        <Text>Sortie le 00/00/0000 (Text)</Text>
                    </View>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    image: {
        flex:1,
        backgroundColor: 'blue'
    },
    titre_film: {
        flex:3,
        backgroundColor: 'orange',
        borderColor: '#000000',
        borderWidth: 1,
    },
    vote: {
        flex:1,
        backgroundColor: 'orange',
        borderColor: '#000000',
        borderWidth: 1
    },
    description: {
        flex: 2,
        backgroundColor: 'red',
        borderColor: '#000000',
        borderWidth: 1,
    },
    date: {
        flex: 1,
        backgroundColor: 'violet',
        borderColor: '#000000',
        borderWidth: 1,
    }
})

export default FilmItem