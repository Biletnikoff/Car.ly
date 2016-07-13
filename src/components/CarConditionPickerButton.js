import React from 'react-native';
import globalVariables from '../styles/globalVariables.js';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} = React;


const styles = StyleSheet.create({
  tapAreaView: {
    alignItems: 'center',
  },
  icon: {
    width: 72,
    height: 38,
  },
  text: {
    color: 'rgba(0,0,0,0.5)',
    paddingTop: 5,
  },
  active: {
    color: globalVariables.green,
  },
});

const CarConditionPickerButton = () => ({

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.tapAreaView}>
          <Image
            style={styles.icon}
          />
          <Text style={[styles.active]}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  },
});

export default CarConditionPickerButton;
