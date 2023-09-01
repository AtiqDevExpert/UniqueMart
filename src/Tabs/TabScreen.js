import React from 'react';
import { Animated, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Settings from '../screens/Setting/Settings';
import CartScreen from '../screens/CartScreen/CartScreen';
import Profile from '../ButtomTab/Profile/profile';
import MassageScreen from '../ButtomTab/Messages/Massages';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();


const _renderIcon = (routeName, selectedTab) => {
  let icon = '';

  switch (routeName) {
    case 'Home':
      icon = 'ios-home-outline';
      break;
    case 'title2':
      icon = 'settings-outline';
      break;
    case 'Cart':
      icon = 'cart';
      break;
    case 'Profile':
      icon = 'users';
      break;
    case 'Cart':
      icon = 'cart';
      break;
  }
  return (
    <Ionicons
      name={icon}
      size={25}
      color={routeName === selectedTab ? 'black' : 'gray'}
    />
  );
}
const renderTabBar = ({ routeName, selectedTab, navigate }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

const TabScreen = () => {

  return (
    <View style={{ flex: 1 }}>

      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        initialRouteName="Home"
        strokeWidth={0.5}
        height={55}
        circleWidth={55}
        bgColor="white"

        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => navigate("Home")}>
              <Ionicons name={'apps-sharp'} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="Home"
          position="LEFT"
          component={HomeScreen}
        />
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          position="LEFT"
          name="Cart"
          component={CartScreen}
        />
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="title2"
          component={Settings}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
      name="Profile"
      component={Profile}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};





// return (
//   <Tab.Navigator
//     initialRouteName="Home"
//     barStyle={{ backgroundColor: '#fff' }}
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ size, focused, color }) => {
//         let iconName;
//         if (route.name === 'Profile') {
//           iconName = 'user';
//           size = focused ? 25 : 15;
//           color = focused ? '#000' : '#555';
//         } else if (route.name === 'Home') {
//           iconName = 'home';
//           size = focused ? 25 : 15;
//           color = focused ? '#000' : '#555';
//         } else if (route.name === 'Cart') {
//           iconName = 'cart-arrow-down';
//           size = focused ? 25 : 15;
//           color = focused ? '#000' : '#555';
//         }
//         else if (route.name === 'Setting') {
//           iconName = 'cog';
//           size = focused ? 25 : 15;
//           color = focused ? '#000' : '#555';
//         }
//         else if (route.name === 'Massage') {
//           iconName = 'spa';
//           size = focused ? 25 : 15;
//           color = focused ? '#000' : '#555';
//         }
//         return <FontAwesome5 name={iconName} size={size} color={color} />;
//       },
//     })}
//     tabBarOptions={{
//       showLabel: true,
//       style: {
//         height: 50,
//         backgroundColor: '#F8F8F8',
//         borderTopLeftRadius: 35,
//         borderTopRightRadius: 35,
//         borderBottomLeftRadius: 0,
//         borderTopWidth: 0,
//         position: 'absolute',
//         elevation: 0,
//       },
//     }}>
//     <Tab.Screen
//       options={{ headerShown: false }}
//       name="Home"
//       component={HomeScreen}
//     />
//     <Tab.Screen
//       options={{ headerShown: false }}
//       name="Cart"
//       component={CartScreen}
//     />
//     <Tab.Screen
//       options={{ headerShown: false }}
//       name="Profile"
//       component={Profile}
//     />
//     <Tab.Screen
//       options={{ headerShown: false }}
//       name="Setting"
//       component={Settings}
//     />
//     <Tab.Screen
//       options={{ headerShown: false }}
//       name="Massage"
//       component={MassageScreen}
//     />
//   </Tab.Navigator>
// );
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
export default TabScreen;
