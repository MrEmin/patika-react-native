import React, {useState} from 'react';
import {View, Alert} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}) {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, setAge] = useState(null);
  const [mail, setMail] = useState(null);
  const [hometown, setHometown] = useState(null);

  function handleSubmit() {
    if (!name || !surname || !age || !mail || !hometown) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
      return;
    }

    const user = {
      name,
      surname,
      age,
      mail,
      hometown,
    };
    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <View>
      <Input
        label="Üye Adı"
        placeholder="Üyenin adını giriniz ..."
        onChangeText={setName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üyenin soyadını giriniz ..."
        onChangeText={setSurname}
      />
      <Input
        label="Üye Yaş"
        placeholder="Üyenin yaşını giriniz ..."
        onChangeText={setAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin e-posta adresini giriniz ..."
        onChangeText={setMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin memleketini giriniz ..."
        onChangeText={setHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
}

export default MemberSign;
