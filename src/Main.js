import * as React from 'react';
import { BottomNavigation, Button, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import Lab4 from './Lab4';
import Lab5 from './Lab5';
import Lab6 from './Lab6';
import Lab7 from './Lab7';
import Lab8 from './Lab8';


const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'lab1', title: 'Lab1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'lab2', title: 'Lab2', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'lab3', title: 'Lab3', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'lab4', title: 'Lab4', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'lab5', title: 'Lab5', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'lab6', title: 'Lab6', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'lab7', title: 'Lab7', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'lab8', title: 'Lab8', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    lab1: App,
    lab2: Lab2,
    lab3: Lab3,
    lab4: Lab4,
    lab5: Lab5,
    lab6: Lab6,
    lab7: Lab7,
    lab8: Lab8,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation  
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default MyComponent;