import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  description: {
    marginTop: 3,
  },
  inner_container: {
    padding: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
