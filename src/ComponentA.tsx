import * as React from 'react';
import {View} from 'react-native';
import {randomColor} from './randomColor';

export function ComponentA({children}) {
  console.log('🚀🚀🚀🚀🚀🚀🚀🚀 A HAS BEEN RENDERED');
  return (
    <View style={{width: '100%', height: 400, backgroundColor: randomColor()}}>
      {children}
    </View>
  );
}
