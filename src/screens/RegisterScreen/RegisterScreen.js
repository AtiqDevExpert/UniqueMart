import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  ProfileEmailIcon,
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
  UserIcon,
  LockHighlightIcon,
  Lockicon,
  UserHighlightIcon,
  Eyeicon,
  EmailHighlightIcon,
  HideEyeIcon,
  EmailIcon,
} from '../../SVG/SvgIcons';
import styles from './style';
import Button from '../../component/Button/button';
import Footer1 from '../../component/Footer/Footer1';
const RegisterScreen = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [Lfocus, setLFocus] = useState(false);
  const [Pfocus, setPFocus] = useState(false);
  const [Efocus, setEFocus] = useState(false);

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <ScrollView>
          <Image
            source={require('../../assets/images/Logo.jpg')}
            style={styles.logo}
          />
          <Text style={styles.text2}>Full Name</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Lfocus ? '#000' : '#F2F3F5'},
            ]}>
            {!Lfocus ? (
              <UserIcon style={styles.userIcon} />
            ) : (
              <UserHighlightIcon style={styles.userIcon} />
            )}
            <TextInput
              placeholder="Enter Full Name"
              placeholderTextColor="#798293"
              onChangeText={text => {
                setLFocus(text);
              }}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.textemail}>Email</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Efocus ? '#000' : '#F2F3F5'},
            ]}>
            {!Efocus ? (
              <EmailIcon style={styles.userIcon} />
            ) : (
              <EmailHighlightIcon style={styles.userIcon} />
            )}
            <TextInput
              placeholder="Enter email"
              placeholderTextColor="#798293"
              onChangeText={text => {
                setEFocus(text);
              }}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.text3}>Password</Text>
          <View
            style={[
              styles.forminputView2,
              {borderColor: Pfocus ? '#000' : '#F2F3F5'},
            ]}>
            {!Pfocus ? (
              <Lockicon style={styles.userIcon} />
            ) : (
              <LockHighlightIcon style={styles.userIcon} />
            )}
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#798293"
              secureTextEntry={passwordVisibility}
              onChangeText={text => {
                setPFocus(text);
              }}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
            {passwordVisibility ? (
              <Eyeicon
                style={styles.eyeIcon}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              />
            ) : (
              <HideEyeIcon
                style={styles.eyeIcon}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              />
            )}
          </View>

          <Button
            // onPress={() => navigation.navigate('accounttype')}
            text={'Create Account'}
            color={'#FFF'}
            fontSize={20}
            height={50}
            width={'80%'}
            borderWidth={1}
            marginTop={30}
            backgroundColor={'#000'}
          />
          <Footer1 />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen;
