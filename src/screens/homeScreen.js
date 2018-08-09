import React from 'react';
import { Text, View, Button, Dimensions, StyleSheet } from 'react-native';
import Styles from '../config/styles';
import DefaultText from '../components/defaultText';

//height of window
var { height } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return{
      title: 'Result',
    };
  };

  render() {
    const result = this.props.navigation.getParam('result', 'No form submitted yet');
    const classUsed = this.props.navigation.getParam('class', 'No form submitted yet');

    return (
      <View style={Styles.resultScreen}>
        <View>
          <DefaultText>Last simulation gave the result:</DefaultText>
          <DefaultText>Dps: {JSON.stringify(result)}</DefaultText>
          <DefaultText>Using class: {JSON.stringify(classUsed)}</DefaultText>
        </View>
      </View>
    );
  }
}
