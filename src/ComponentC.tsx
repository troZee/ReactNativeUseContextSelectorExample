import * as React from 'react';
import {Button, View} from 'react-native';
import {randomColor} from './randomColor';
import {useContextProvider} from './ContextProvider';

export function ComponentC() {
  const [state, dispatch] = useContextProvider();

  return (
    <View style={{width: '100%', height: 50, backgroundColor: randomColor()}}>
      <Button
        title={`Value is ${state.count}`}
        onPress={() => {
          dispatch({type: 'increment'});
        }}
      />
    </View>
  );
}
