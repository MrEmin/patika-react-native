import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../components/Button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    color: '#000',
  },
});

export default Welcome;
