import * as React from 'react';
import {Button, View} from 'react-native';
import {randomColor} from './randomColor';
import {useContextSelector} from 'use-context-selector';
import {MyContext} from './ContextProvider';

export function ComponentCSelector() {
  const person = useContextSelector(MyContext, v => v[0].person);
  const dispatch = useContextSelector(MyContext, v => v[1]);

  return (
    <View style={{width: '100%', height: 50, backgroundColor: randomColor()}}>
      <Button
        title={`Value is ${person.age}`}
        onPress={() => {
          dispatch({type: 'setAge', age: person.age + 1});
        }}
      />
    </View>
  );
}
