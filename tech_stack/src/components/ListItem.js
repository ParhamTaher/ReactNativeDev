import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// import every exported item from actions file
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
            if (this.props.expanded) {
                return (
                    <CardSection>
                        <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
                    </CardSection>
                );
            }
    }

    render() {
        // destructuring
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// any props inside this component will show up in mapStateToProps as ownProps
// (ownProps === this.props)
// (pre calculation)
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

// bind action creators to this component
// first argument is for mapStateToProps only
// add as props
export default connect(mapStateToProps, actions)(ListItem);
