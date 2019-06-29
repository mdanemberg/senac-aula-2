import React from 'react'
import { Picker } from "react-native"

class PickCategory extends React.Component {
    state = {
        language: ''
    }
    render () {
        return (
            <Picker
                selectedValue={this.state.language}
                style={{height: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        )
    }
}

export default PickCategory
