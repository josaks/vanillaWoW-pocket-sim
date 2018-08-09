import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Style from '../config/styles';
import DefaultText from './defaultText';

export default class SubmitButton extends React.Component{
  render(){
    return(
      <TouchableOpacity style={[Style.btn, Style.submitBtnColor]} onPress={this.props.onPress}>
        <DefaultText>{this.props.text}</DefaultText>
      </TouchableOpacity>
    );
  }
};
