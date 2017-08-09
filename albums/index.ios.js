

//Import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
// If js file, do not need .js at the end of header for example
import Header from './src/components/Header';
// Relative path
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
    );
};

// Render
AppRegistry.registerComponent('albums', () => App);
