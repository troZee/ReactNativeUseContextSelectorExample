import * as React from 'react';
import {Button, View} from 'react-native';
import {randomColor} from './randomColor';
import {useContextProvider} from './ContextProvider';

export function ComponentC({children}) {
  const context = useContextProvider();
  const value = context?.value ?? '';
  return (
    <View style={{width: '100%', height: 100, backgroundColor: randomColor()}}>
      {children}
      <Button
        title={`Value is ${value}`}
        onPress={() => {
          context?.setValue(`${value}+`);
        }}
      />
    </View>
  );
}
