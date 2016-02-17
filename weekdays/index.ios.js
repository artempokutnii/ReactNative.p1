import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item';

const DAYS = [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
             ]

// MainScreen
class weekdays extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
            Days of the Week:
        </Text>
        <DayItem />
      </View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Move heigh wise
    alignItems: 'center' // Move width
  }
})

AppRegistry.registerComponent('weekdays', () => weekdays);
