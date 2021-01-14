import React, { useEffect, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import ArtistList from './ArtistList';
import Music from './API';


export default function Home() {
    

    const [artistsData, setArtistsData] = useState(null);
    useEffect(() => {
        Music().then(data => {
            setArtistsData(data);
        });
    }, []);
    return (
        <View style={styles.container}>
            {artistsData && <ArtistList artistsData={artistsData} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
    }
  });