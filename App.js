import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInStack from './navigation';
// fixes 
//  requireNativeComponent: "RNGestureHandlerRootView" was not found in the UI manager
import 'react-native-gesture-handler';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
      <SignInStack/>
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
