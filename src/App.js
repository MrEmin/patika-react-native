import React from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

function App() {
  async function fetchData() {
    console.log(1);
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
      console.log(2),
    );
    console.log(response);
    console.log(3);
  }
  return (
    <View>
      <Text>Hello API</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
}

export default App;
