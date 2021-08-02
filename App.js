import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomNavigate from './src/navigations/BottomNavigate';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigate />
    </NavigationContainer>
  );
};

export default App;
