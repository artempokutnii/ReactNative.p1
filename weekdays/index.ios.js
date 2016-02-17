import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// MainScreen
class weekdays extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
            Days of the Week:
        </Text>
      </View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('weekdays', () => weekdays);
