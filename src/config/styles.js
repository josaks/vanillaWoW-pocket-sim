import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  classDropdownListLabel: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  classDropdownListLabelWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  classDropdownListPickerWrapper: {
    flex: 2,
    backgroundColor: 'gray',
  },
  classDropDownList: {
    flexDirection: 'row',
  },
  optionsScreen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  resultScreen: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  form: {
    width: width*0.95,
    marginTop: 10,
  },
  btnWrapper: {
    flexDirection: 'row',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width*0.5,
    height: height*0.10,
  },
  submitBtnColor: {
    backgroundColor: '#4283f4',
  },
  resetBtnColor: {
    backgroundColor: '#cc1e04',
  },
  defaultText: {
    fontSize: 20,
  },
});
