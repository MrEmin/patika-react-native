import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  async function fetchData() {
    // async & await daha okunabilir ve iyi.
    /* const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data); */
    axios.get(URL).then(response => {
      setLoading(false);
      setUserList(response.data);
    });
  }

  const renderUser = ({item}) => (
    <UserCard name={item.name} username={item.username} email={item.email} />
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
      {/* <Button title="Fetch Data" onPress={fetchData} /> */}
    </View>
  );
}

export default App;
