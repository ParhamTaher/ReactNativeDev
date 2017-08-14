import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

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
            <Provider
                store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
            >
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;
