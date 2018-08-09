// /*Unused - Move to another project*/
//
// import React from 'react';
// import { Text, View, Button } from 'react-native';
//
// class GetFromApi extends React.Component{
//   state = {
//     tasks: [1]
//   }
//
//   onclick = () => {
//     const url = 'http://192.168.0.130:3000/tasks';
//
//     fetch(url)
//     .then((response) => response.json())
//     .then((responseJson) => {
//       this.setState({
//         tasks: responseJson
//       });
//     })
//     .catch((error) => {
//       tasks = [{name: 'Failed to get tasks'}];
//       console.error(error);
//     });
//   }
//
//   render() {
//     return (
//       <View>
//         <Button title='Fetch tasks from api' onPress={this.onclick}></Button>
//
//         {/*show all items in state array*/}
//         { this.state.tasks.map((item, key) => (
//           <Text key={key}> {item.name}</Text>
//         ))}
//       </View>
//     );
//   }
// }
