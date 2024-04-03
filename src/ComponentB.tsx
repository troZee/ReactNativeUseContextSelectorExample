import * as React from 'react';
import {View} from 'react-native';
import {randomColor} from './randomColor';

export function ComponentB({children}) {
  return (
    <View style={{width: '100%', height: 200, backgroundColor: randomColor()}}>
      {children}
    </View>
  );
}
