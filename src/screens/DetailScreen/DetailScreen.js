import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import styles from './style';
import items from './ProductList';
import React, { useState, useEffect } from 'react';
import Header from '../../component/Header/Header';
import { Rating } from 'react-native-ratings';
import Button from '../../component/Button/button';
import { setOrigin, setCartList } from '../../../Slices/NavSlices';
import { useDispatch } from 'react-redux';
// const fun = item => {
//   navigation.navigate('Cart', {item});
// };
const DetailScreen = ({ navigation, route }) => {
  const [item, setItem] = useState(route.params.item);
  useEffect(() => {
  }, [])

  // const [size] = useState([
  //   {id: 1, label: 'S'},
  //   {id: 2, label: 'M'},
  //   {id: 3, label: 'L'},
  //   {id: 4, label: 'XL'},
  // ]);
  // const [selectedSize, setSelectedSize] = useState('M');
  const dispatch = useDispatch();

  const fun = item => {
    dispatch(
      setCartList({ id: item.id })
    )
    navigation.navigate('Cart', { item });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.design} source={item.img} />
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <Text style={styles.name}>Price : {item.price}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingName}>Rating : </Text>
          <Rating
            imageSize={15}
            onFinishRating={rating => {
              Alert.alert('Star Rating: ' + JSON.stringify(rating));
            }}
          />
        </View>
        <Text style={styles.detail}>Discription : {item.Detail}</Text>
        <View>
          {/* <View style={{marginVertical: 15, flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'MontserratBold',
                marginBottom: 10,
                color: '#000',
                marginHorizontal: 10,
                fontWeight: 'bold',
              }}>
              Size:
            </Text>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              {size.map(s => (
                <TouchableOpacity
                  key={s.id}
                  style={
                    selectedSize === s.label ? styles.tagSelected : styles.tag
                  }
                  onPress={() => setSelectedSize(s.label)}>
                  <Text
                    style={
                      selectedSize === s.label
                        ? styles.tagLabelSelected
                        : styles.tagLabel
                    }>
                    {s.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View> */}
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginVertical: 15,
            }}>
            <View>
              <Button
                onPress={() => navigation.navigate('HomeScreen')}
                text={'Buy Now'}
                color={'#FFF'}
                fontSize={20}
                height={40}
                width={150}
                borderWidth={1}
                backgroundColor={'#000'}
              />
            </View>
            <View>
              <Button
                onPress={() => {
                  dispatch(
                    setOrigin({
                      itemid: 4
                    })
                  );
                  fun(item)
                }}
                text={'Add to Cart'}
                color={'#000'}
                fontSize={20}
                height={40}
                width={150}
                borderWidth={1}
                backgroundColor={'#FFF'}
              />
            </View>
          </View>
          {/* <Text style={styles.headerMore}>More Products</Text>
          <FlatList
            horizontal={true}
            numColumns={1}
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableWithoutFeedback onPress={() => fun(item)}>
                  <View style={styles.flatlItem}>
                    <Image style={styles.flatImage} source={item.img} />
                    <Text style={styles.itemName2}>{item.name}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
