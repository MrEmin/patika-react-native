import React from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

function App() {
  function fetchData() {
    console.log(1);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response);
        console.log(2);
      })
      .catch(error => console.log(error));
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
