import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  detailContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  name: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  itemName: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  design: {
    width: 300,
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#ff0',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginVertical: 5,
  },
  button: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    borderRadius: 100,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'trasnparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '25%',
    position: 'absolute',
    bottom: 10,
  },
  rating: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  ratingName: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  headerMore: {
    color: '#000',
    fontSize: 30,
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  flatlItem: {
    width: 250,
    height: 250,
    borderRadius: 10,
    elevation: 50,
    shadowColor: '#ff0',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginVertical: 10,
    alignSelf: 'center',
    marginHorizontal: 5,
    backgroundColor: '#000',
    marginBottom: 25,
  },
  flatImage: {width: 250, height: 250, borderRadius: 10},
  itemName2: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tag: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    fontFamily: 'MontserratBold',
    color: '#333',
  },
  tagSelected: {
    backgroundColor: '#333',
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    fontFamily: 'MontserratBold',
    color: '#FFF',
  },
  or: '#FFF',
});
export default styles;
