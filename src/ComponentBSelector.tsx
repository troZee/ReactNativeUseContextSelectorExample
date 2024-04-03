import * as React from 'react';
import {Button, View} from 'react-native';
import {randomColor} from './randomColor';
import {MyContext} from './ContextProvider';
import {useContextSelector} from 'use-context-selector';

export function ComponentBSelector() {
  const count = useContextSelector(MyContext, v => v[0].count);
  const dispatch = useContextSelector(MyContext, v => v[1]);

  return (
    <View style={{width: '100%', height: 50, backgroundColor: randomColor()}}>
      <Button
        title={`${count}`}
        onPress={() => {
          dispatch({type: 'increment'});
        }}
      />
    </View>
  );
}
