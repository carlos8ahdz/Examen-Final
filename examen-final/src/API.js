const apiKey = 'key';
const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=34cd5159fc9284ff113c98ac35e285c4&format=json`;

export default function Music() {
    console.log('api');
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }) 
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => {
            return {
                id: artist.mbid,
                name: artist.name,
                image: artist.image[3]['#text']
            }
        }));
}