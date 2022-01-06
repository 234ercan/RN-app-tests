import React, {Componenet} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import boxText from './src/components/boxText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export  class App extends Componenet {
  _onPressBtnClick = ()=>
  {
    alert('Clicked!');
  }
}
const HelloWorldApp = () => {
  return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
     <Button> color='#000' title='test Button' onPress={this._onPressBtnClick} </Button>
     </View>
    
 
  
  )
}
  
export default HelloWorldApp;