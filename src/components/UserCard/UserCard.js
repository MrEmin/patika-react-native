import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserCard = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{props.username}</Text>
      <View style={styles.inner_container}>
        <Text>{props.name}</Text>
        <View style={styles.inner_email}>
          <Text style={styles.email}>{props.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    marginVertical: 5,
    padding: 5,
  },
  email: {
    fontSize: 12,
    fontStyle: 'italic',
    marginLeft: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    justifyContent: 'space-between',
  },
  inner_email: {
    justifyContent: 'flex-start',
    width: 180,
  },
});

export default UserCard;
