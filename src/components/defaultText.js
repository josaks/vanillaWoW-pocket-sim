import React from 'react';
import { Text } from 'react-native';
import Styles from '../config/styles';

export default class DefaultText extends React.Component{
  render(){
    return(
      <Text style={Styles.defaultText}>{this.props.children}</Text>
    );
  }
};
