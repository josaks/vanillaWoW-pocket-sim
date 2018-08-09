import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Style from '../config/styles';
import DefaultText from './defaultText';

export default class ResetButton extends React.Component{
  render(){
    return(
      <TouchableOpacity style={[Style.btn, Style.resetBtnColor]} onPress={this.props.onSubmit}>
        <DefaultText>{this.props.text}</DefaultText>
      </TouchableOpacity>
    );
  }
};
