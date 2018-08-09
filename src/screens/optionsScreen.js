import React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import ClassDropdownList from '../components/classdropdownlist';
import Styles from '../config/styles';
import { Form, getForm } from '../config/forms';
import { ClassesEnum } from '../config/constants'
const { warrior, rogue, druid, mage, warlock, priest, paladin, hunter, shaman } = ClassesEnum;
import Calculate from '../lib/calculate/calculate';
import SubmitButton from '../components/submitButton';
import ResetButton from '../components/resetButton';

export default class OptionsScreen extends React.Component{
  static navigationOptions = {
    title: 'Stats',
  }

  constructor(props){
    super(props);
    this.state = {
      selectedClass: warrior,
    };
  }

  changeClass = (className) => {
    this.setState({
      selectedClass: className,
    });
  }

  resetForm() {
    this.ref.form.setState({value: null});
  }

  onSubmit = () => {
    //get form
    const value = this.refs.form.getValue();
    if(value){
      //calculate result
      const result = Calculate(value, this.state.selectedClass);
      //navigate to result screen
      this.props.navigation.navigate('Home', {
        result: result,
        class: this.state.selectedClass,
      });
    }
  }

  render(){
    const { form, options } = getForm(this.state.selectedClass);

    return(
      <View style={Styles.optionsScreen}>
          <ClassDropdownList onchange={this.changeClass}/>
          <ScrollView style={Styles.form}>
            <Form
              type={form}
              options={options}
              ref='form'
            />
          </ScrollView>
          <View style={Styles.btnWrapper}>
            <SubmitButton onPress={this.onSubmit} text='Calculate' />
            <ResetButton onPress={this.resetForm} text='Reset' />
          </View>
      </View>
    );
  }
}
