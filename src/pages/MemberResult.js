import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MemberResult({route}) {
  const {user} = route.params;
  return (
    <View>
      <Text style={styles.message}>Kayıt Tamamlandı</Text>
      <Text style={styles.label}>Üye Adı: {user.name}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.surname}</Text>
      <Text style={styles.label}>Üye Yaşı: {user.age}</Text>
      <Text style={styles.label}>Üye E-posta: {user.mail}</Text>
      <Text style={styles.label}>Üye Memleketi: {user.hometown}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    color: '#000',
  },
  message: {
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    color: '#000',
  },
});

export default MemberResult;
