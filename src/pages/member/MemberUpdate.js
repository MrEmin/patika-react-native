import React from 'react';
import {View, Text, Button} from 'react-native';

function MemberUpdate({navigation}) {
  return (
    <View>
      <Text>Hello MemberUpdate</Text>
      <Button
        title="Profile Edit"
        onPress={() =>
          navigation.navigate('Profile', {screen: 'ProfileEditScreen'})
        }
      />
    </View>
  );
}

export default MemberUpdate;
