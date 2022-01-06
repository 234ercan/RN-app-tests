import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class boxText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.boxText}> Hello </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
boxText:{fontSize:18, color: "red", borderWidth:2, borderColor: "blue", borderRadius: 5},

})
