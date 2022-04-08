import { StyleSheet, Text, View } from 'react-native';
// fixes 
//  requireNativeComponent: "RNGestureHandlerRootView" was not found in the UI manager
// requireNativeComponent: "RNCSafeAreaProvider" was not found in the UI manager
// yarn add react-native-safe-area-view
import 'react-native-gesture-handler';
import SignInStack from './navigation';

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
