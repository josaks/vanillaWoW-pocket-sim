import React from 'react';
import { View, Text, Picker } from 'react-native';
import Styles from '../config/styles';

//import class enums
import { ClassesEnum } from '../config/constants'
const { warrior, rogue, druid, mage, warlock, priest, paladin, hunter, shaman } = ClassesEnum;

//import redux connect and actions
import { connect } from 'react-redux';
import { selectClass } from '../actions';

class ClassDropdownList extends React.Component{
  handleChange = (itemValue) => {
    this.props.selectClass(itemValue);
  }

  constructor(props){
    super(props);
    this.state = {
      pickerValue: warrior,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return(
      <View style={Styles.classDropDownList}>
        <View style={Styles.classDropdownListLabelWrapper}>
          <Text style={Styles.classDropdownListLabel}>Class: </Text>
        </View>
        <View style={Styles.classDropdownListPickerWrapper}>
          <Picker
            onValueChange={(itemValue, itemIndex) => {
              this.setState({pickerValue: itemValue});
              this.props.onchange(itemValue);
            }}
            selectedValue={this.state.pickerValue}
          >
            <Picker.Item label='Warrior' value={warrior} />
            <Picker.Item label='Rogue' value={rogue} />
            <Picker.Item label='Warlock' value={warlock} />
            <Picker.Item label='Mage' value={mage} />
            <Picker.Item label='Hunter' value={hunter} />

            {/*Not real dps classes*/}
            {/*<Picker.Item label='Druid' value={druid} />
            <Picker.Item label='Priest' value={priest} />
            <Picker.Item label='Paladin' value={paladin} />
            <Picker.Item label='Shaman' value={shaman} />*/}
          </Picker>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        selectedClass: state.selectedClass,
    };
}

const mapDispatchToProps = (dispatch) => ({
  selectClass(selectedClass) { dispatch(selectClass(selectedClass)) }
});

// function mapDispatchToProps(dispatch) {
//     return {
//       selectClass: (selectedClass) => dispatch(selectClass(selectedClass)),
//     };
// }

export default connect(mapStateToProps, mapDispatchToProps)(ClassDropdownList);
