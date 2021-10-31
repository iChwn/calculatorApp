import React from 'react'
import { Text, View } from 'react-native'
import { Calculator } from 'react-native-calculator'

export default class FullScreenCalculatorScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textToDisplay: ""
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor:"#000000" }}>
        <View>
          <Text style={{fontSize: 30, color: "#FFFFFF"}}>Calculator ichwan</Text>
          <Text style={{fontSize: 50, color: "#FFFFFF"}}>{this.state.textToDisplay}</Text>
        </View>
        <Calculator
          style={{ flex: 1, paddingTop: 100}}
          hideDisplay={true}
          numericButtonBackgroundColor="#000000"
          calcButtonBackgroundColor="#A2222F"
          actionButtonBackgroundColor="#ff8d00"
          actionButtonColor="#ffffff"
          onTextChange={text => {
            this.setState({textToDisplay: text})
          }}
        />
      </View>
    )
  }
}