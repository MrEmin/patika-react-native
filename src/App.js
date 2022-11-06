import React from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

function App() {
  function fetchData() {
    axios.get('https://jsonplaceholder.typicode.com/users');
  }
  return (
    <View>
      <Text>Hello API</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
}

export default App;
