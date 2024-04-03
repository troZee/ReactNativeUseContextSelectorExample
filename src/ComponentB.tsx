import * as React from 'react';
import {Text, View} from 'react-native';
import {randomColor} from './randomColor';
import {useContextProvider} from './ContextProvider';

export function ComponentB() {
  const [state] = useContextProvider();
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: randomColor(),
      }}>
      <Text>THIS WILL CHANGE, WHERE VALUE IS CONSTANT {state.person.age}</Text>
    </View>
  );
}
