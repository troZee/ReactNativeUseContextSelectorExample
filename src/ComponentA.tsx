import * as React from 'react';
import {View} from 'react-native';
import {randomColor} from './randomColor';

export function ComponentA() {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: randomColor(),
      }}
    />
  );
}
