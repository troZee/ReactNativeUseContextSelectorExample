/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ComponentA} from './ComponentA';
import {ComponentB} from './ComponentB';
import {ComponentC} from './ComponentC';
import {ContextProvider, MyContextProvider} from './ContextProvider';
import {ComponentASelector} from './ComponentASelector';
import {ComponentBSelector} from './ComponentBSelector';
import {ComponentCSelector} from './ComponentCSelector';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>React Context</Text>
          <ContextProvider>
            <ComponentB />
            <ComponentA />
            <ComponentC />
          </ContextProvider>
          <Text>React Selector Context</Text>
          <MyContextProvider>
            <ComponentASelector />
            <ComponentBSelector />
            <ComponentCSelector />
          </MyContextProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
