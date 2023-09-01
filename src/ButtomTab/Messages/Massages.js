// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   SafeAreaView,
//   FlatList,
//   TextInput,
// } from 'react-native';
// import {MassageIcon} from '../../Svgs/Facility/Icons';
// import styles from './style';
// import {
//   ProfileBackIcon,
//   ProfileDotsIcon,
// } from '../../Svgs/Profile/ProfileVectors';

// import {useNavigation} from '@react-navigation/native';
// import { Messages } from './MassagesList';

// const MassageScreen=() => {
//   const navigation = useNavigation();

//   const fun = item => {
//     navigation.navigate('chatScreen', {item});
//   };

//   const [search, setSearch] = useState('');

//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       <View style={styles.subContainer}>
//         <ProfileBackIcon
//           style={styles.backIcon}
//           onPress={() => navigation.goBack()}
//         />
//         <Text style={styles.text}>Message</Text>
//         <Text style={styles.dummyText}>Message</Text>
//       </View>
//       <View style={styles.searchView}>
//         <View style={styles.inputView}>
//           <MassageIcon style={styles.searchIcon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Search contacts..."
//             textContentType="name"
//             placeholderTextColor="#798293"
//             onChangeText={text => {
//               setSearch(text);
//             }}
//           />
//         </View>
//       </View>
//       <ScrollView>
//         <FlatList
//           data={Messages.filter(item =>
//             item.name.toUpperCase().includes(search.toUpperCase()),
//           )}
//           renderItem={({item}) => {
//             return (
//               // <View style={{ flex: 1, backgroundColor: '#fff' }}>
//               <TouchableOpacity style={styles.touch1} onPress={() => fun(item)}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                   }}>
//                   <View style={styles.view2}>
//                     <Image style={styles.img} source={item.image} />
//                     <View style={styles.view3}>
//                       <Text style={styles.name}>{item.name}</Text>
//                       <Text style={styles.msg}>{item.message}</Text>
//                     </View>
//                   </View>

//                   <View style={{justifyContent: 'center'}}>
//                     <Text style={styles.msg}>{item.time}</Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//               // </View>
//             );
//           }}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default MassageScreen;
import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  Platform,
  UIManager,
  Image
} from 'react-native';
import { Messages } from './MassagesList';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import SwipeableItem, {
  useSwipeableItemParams,
} from 'react-native-swipeable-item';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
const { multiply, sub } = Animated;

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const OVERSWIPE_DIST = 20;
// const NUM_ITEMS = 20;

const randVal = () => Math.floor(Math.random() * 255);





// const initialData = [...Array(massage)].fill(0).map((d, index) => {
//   const backgroundColor = getColor(index);
//   return {
//     text: `${index}`,
//     key: `key-${backgroundColor}`,
//     backgroundColor,
//     height: 100,
//   };
// });

const MassageScreen = () => {
  const [data, setData] = useState(Messages);
  const itemRefs = useRef(new Map());

  const renderItem = useCallback((params) => {
    const onPressDelete = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
      setData(prev => {
        return prev.filter(item => item !== params.item)
      })
    }

    return <RowItem {...params} itemRefs={itemRefs} onPressDelete={onPressDelete} />;
  }, []);

  return (
    <View style={styles.container}>
      <DraggableFlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={renderItem}
        onDragEnd={({ data }) => setData(data)}
        activationDistance={20}
      />

    </View>
  );
}


export default MassageScreen;



function RowItem({ item, itemRefs, drag, onPressDelete }) {
  const [snapPointsLeft, setSnapPointsLeft] = useState([200]);

  return (
    <ScaleDecorator>
      <SwipeableItem
        key={item.key}
        item={item}
        ref={(ref) => {
          if (ref && !itemRefs.current.get(item.key)) {
            itemRefs.current.set(item.key, ref);
          }
        }}
        onChange={({ open }) => {
          if (open) {
            [...itemRefs.current.entries()].forEach(([key, ref]) => {
              if (key !== item.key && ref) ref.close();
            });
          }
        }}
        overSwipe={OVERSWIPE_DIST}
        renderUnderlayLeft={() => <UnderlayLeft drag={drag} onPressDelete={onPressDelete} />}
        snapPointsLeft={snapPointsLeft}>
        <TouchableOpacity style={styles.touch1}

          activeOpacity={1}
          onLongPress={drag}


        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'red',
            }}>
            <View style={styles.view2}>
              <Image style={styles.img} source={item.image} />
              <View style={styles.view3}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.msg}>{item.message}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.msg}>{item.time}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SwipeableItem>
    </ScaleDecorator>
  );
}

const UnderlayLeft = ({ drag, onPressDelete }) => {
  const { item, percentOpen } = useSwipeableItemParams();
  const animStyle = useAnimatedStyle(
    () => ({
      opacity: percentOpen.value,
    }),
    [percentOpen]
  );

  return (
    <Animated.View
      style={[styles.row, styles.underlayLeft, animStyle]} // Fade in on open
    >
      <TouchableOpacity onPress={onPressDelete}>
        <Text style={styles.text}>{`[delete]`}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 32,
  },

  underlayLeft: {
    // flex: 1,
    backgroundColor: 'tomato',
    // justifyContent: 'flex-end',
  },
});
