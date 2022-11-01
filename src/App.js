import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

function App() {
  const [helloFlag, setHelloFlag] = useState(true);

  function updateFlag() {
    setHelloFlag(!helloFlag);
  }

  return (
    <View>
      <Text>Hello Lifecycle</Text>
      <Button title={'Up!'} onPress={updateFlag} />
      {helloFlag && <Hello />}
    </View>
  );
}

export default App;

function Hello() {
  useEffect(() => {
    console.log('Merhaba Dünya');

    return () => {
      console.log('Gidiyorum bütün aşklar yüreğimde');
    };
  }, []);

  return (
    <View>
      <Text>I'm Hello Component</Text>
    </View>
  );
}
