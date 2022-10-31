import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import NewsCard from './components/NewsCard/NewsCard';
import Banner from './components/Banner';

import news_data from './news_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyExtactorNews = (item, index) => item.u_id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={<Banner />}
        keyExtractor={keyExtactorNews}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#000',
    paddingLeft: 3,
  },
});

export default App;
