import React, { useState } from 'react';
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
  LockHighlightIcon,
  LockIcon,
  EyeIcon,
  EmailHighlightIcon,
  HideEyeIcon,
  EmailIcon,
} from '../../SVG/SvgIcons';
import styles from './style';
import Footer from '../../component/Footer/Footer';
import Button from '../../component/Button/button';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [Efocus, setEfocus] = useState(false);
  const [Pfocus, setPFocus] = useState(false);

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <Image
          source={require('../../assets/images/Logo.jpg')}
          style={styles.logo}
        />
        <Text style={styles.text2}>Email</Text>
        <View
          style={[
            styles.forminputView,
            { borderColor: Efocus ? '#000' : '#F2F3F5' },
          ]}>
          {!Efocus ? (
            <EmailIcon style={styles.userIcon} />
          ) : (
            <EmailHighlightIcon style={styles.userIcon} />
          )}
          <TextInput
            placeholder={'Enter Your Email'}
            placeholderTextColor="#798293"
            onChangeText={text => {
              setEfocus(text);
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
            { borderColor: Pfocus ? '#000' : '#F2F3F5' },
          ]}>
          {!Pfocus ? (
            <LockIcon style={styles.userIcon} />
          ) : (
            <LockHighlightIcon style={styles.userIcon} />
          )}
          <TextInput
            placeholder={'Enter password'}
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
            <EyeIcon
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
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => navigation.navigate('resetPassword')}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
        <Button
          text={'Login'}
          color={'#fff'}
          fontSize={20}
          height={50}
          width={'80%'}
          borderWidth={1}
          marginTop={50}
          backgroundColor={'#000'}
          onPress={() => navigation.navigate('tabs')}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};
export default Login;
