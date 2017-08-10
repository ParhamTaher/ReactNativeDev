import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBPGELyyxLrSO0AjAxlndswb-j-d5RZHeg',
            authDomain: 'manager-edaf5.firebaseapp.com',
            databaseURL: 'https://manager-edaf5.firebaseio.com',
            projectId: 'manager-edaf5',
            storageBucket: 'manager-edaf5.appspot.com',
            messagingSenderId: '954461699956'
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
