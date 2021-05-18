import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { View, Text, Button, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { MyContext } from '../../App';

const Profile: React.FC = () => {

  const navigation = useNavigation();
  const { height, width } = Dimensions.get('window');
  const { infor, setInfor } = useContext(MyContext)
  const { email } = infor;
  const { password } = infor;
  const { isLogin } = infor;

  const handle = () => {
    setInfor({ ...infor, email: '', password: '', isLogin: false })

  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 1 / 6, width: width, }} />
      <Image source={{ uri: 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-1/p240x240/175312246_1156781358098372_1271724331664139360_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=LQypyfR5mKQAX9cDmZf&_nc_ht=scontent-xsp1-1.xx&tp=6&oh=cd9a313c4a9990034197127be87dca0c&oe=60C83EA5' }} style={{ height: 120, width: 120, borderRadius: 60, position: 'absolute', alignSelf: 'center', bottom: '70%' }} />
      <Text style={{ marginTop: 100, marginLeft: 10, fontSize: 15 }}> Xin chào {email} ! </Text>

      <TouchableOpacity onPress={() => handle()} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', backgroundColor: 'red', width: 100, borderWidth: 1, borderRadius: 8 }}>
          Sign Out
            </Text>
      </TouchableOpacity>

    </View>
  );


}
export default Profile;