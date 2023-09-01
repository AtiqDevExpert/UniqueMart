import {
  Image,
  View,
  SafeAreaView,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';
import LoginScreen from '../../component/TextInput/LoginScreen';
import Footer from '../../component/Footer/Footer';
import Button from '../../component/Button/button';
const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/Logo.jpg')}
        />
      </View>
      <ScrollView>
        <LoginScreen />
        <View style={styles.buttonForget}>
          <Pressable
            hitSlop={{top: 10, buttom: 10, left: 10, right: 10}}
            onPress={() => navigation.navigate('Home')}
            // android_ripple={{ color: '#0df' }}
          >
            <Text style={styles.forgetpassword}>Forget Password ?</Text>
          </Pressable>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* <Pressable
            hitSlop={{top: 10, buttom: 10, left: 10, right: 10}}
            onPress={() => navigation.navigate('Home')}
            // android_ripple={{color: '#00f'}}
            style={styles.buttonLogin}>
            <Text style={styles.submit}>Login</Text>
          </Pressable> */}
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            text={'Login'}
            color={'#FFF'}
            fontSize={20}
            height={50}
            width={'80%'}
            borderWidth={1}
            marginTop={30}
            backgroundColor={'#000'}
          />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
