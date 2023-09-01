import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonLogin: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 0.5,
    marginVertical: 20,
  },
  buttonForget: {
    flex: 1,
    flexDirection: 'row-reverse',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  submit: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'center',
    marginVertical: 15,
    // flexDirection: 'row-reverse',
  },
  image: {
    height: 250,
    width: 250,
  },
  forgetpassword: {
    color: '#0df',
    fontSize: 12,
    // margin: 10,
    // textAlign: 'center',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
