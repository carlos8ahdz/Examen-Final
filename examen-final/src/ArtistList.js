import React, { useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ArtistBox from './ArtistBox';
import {Actions} from 'react-native-router-flux';

export default function ArtistList({artistsData}) {

  // useEffect(() => {

  // }, [artistsData])

    const renderItem = ({item}) => (
        <TouchableOpacity 
        onPress={() => handleArtistPage(item.name, item.image)}
        >
            <ArtistBox image={item.image} name={item.name}></ArtistBox>
        </TouchableOpacity>
      );
      
      const handleArtistPage = (itnameArtistem1, iteimgArtistm2) => {
          Actions.artistPage({nameArtist: itnameArtistem1, imgArtist: iteimgArtistm2});
      }
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={artistsData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });