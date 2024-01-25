import * as React from 'react';

import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyComponent from './screen/login'; // Adjust the import path as necessary
import Bottom from './screen/bottomBar'; // Adjust the import path as necessary
import LoginScreen from './screen/Auth';

const App = () => {
  return (
    <PaperProvider>

      <LoginScreen />

   </PaperProvider>
  );
};

/*
<MyComponent />
<Bottom />
*/

export default App;