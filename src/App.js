import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <View>
      <Text style={{fontSize: 40}}>Counter: {counter}</Text>
      <Button title="Increase Counter" onPress={increaseCounter} />
      <Button title="Decrease Counter" onPress={decreaseCounter} />
    </View>
  );
}

export default App;
