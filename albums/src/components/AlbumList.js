import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// JSX functional component
/*
const AlbumList = () => {
  return (
    <View>
      <Text> Album List </Text>
    </View>
  );
};
*/

// Props are for parent to child communication
// State is for internal record keeping

// ES6 class component, classes do not require semi-colon at the end
class AlbumList extends Component {
  // State is the concept of updating data that components show over time as loading new data
  // Initialize state
  state = { albums: [] };
  // Lifecycle method: executed as soon as this component loads
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // Calling setState re-renders component
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // Render method
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}


export default AlbumList;
