import { StyleSheet, Text, View } from 'react-native';
// fixes 
//  requireNativeComponent: "RNGestureHandlerRootView" was not found in the UI manager
import 'react-native-gesture-handler';
import AuthNavigation from './AuthNavigation';

export default function App() {
  return (
      <AuthNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
