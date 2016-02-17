import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class DayItem extends Component {
render() {
  return(
      <Text style={styles.day}>
        A day of the week
      </Text>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
})

export default DayItem;
