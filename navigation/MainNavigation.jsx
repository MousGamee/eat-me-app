import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import FoodDetail from "../screens/FoodDetail";
import { COLORS, dummyData, icons, SIZES } from "../constants";
import MyCart from "../screens/MyCart";
import MyCard from "../screens/MyCard";
import AddCard from "../screens/AddCard";
import Checkout from "../screens/Checkout";
import Success from "../screens/Success";
import DeliveryStatus from "../screens/DeliveryStatus";
import Map from "../screens/Map";
import MyAccount from "../screens/MyAccount";
import MyAccountEdit from "../screens/MyAccountEdit";
import Settings from "../screens/Settings";
import ChangePassword from "../screens/ChangePassword";
import NotificationSetting from "../screens/NotificationSetting";
import Favourite from "../screens/Favourite";

const Screens = createStackNavigator();

const MainNavigation = ({ navigation }) => {
  return (
    <Screens.Navigator
      screenOptions={{
        //headerTitleAlign: "center",
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screens.Screen name="Home" component={Home} />
      <Screens.Screen
        name="Notification"
        component={Notification}
        options={{ gestureEnabled: false }}
      />
      <Screens.Screen name="FoodDetail" component={FoodDetail} />
      <Screens.Screen name="MyCart" component={MyCart} />
      <Screens.Screen name="MyCard" component={MyCard} />
      <Screens.Screen name="AddCard" component={AddCard} />
      <Screens.Screen name="Checkout" component={Checkout} />
      <Screens.Screen
        name="Success"
        component={Success}
        options={{ gestureEnabled: false }}
      />
      <Screens.Screen
        name="DeliveryStatus"
        component={DeliveryStatus}
        options={{ gestureEnabled: false }}
      />
      <Screens.Screen name="Map" component={Map} />
      <Screens.Screen name="MyAccount" component={MyAccount} />
      <Screens.Screen name="MyAccountEdit" component={MyAccountEdit} />
      <Screens.Screen name="Settings" component={Settings} />
      <Screens.Screen name="ChangePassword" component={ChangePassword} />
      <Screens.Screen name="NotificationSetting" component={NotificationSetting} />
      <Screens.Screen name="Favourite" component={Favourite} />
    </Screens.Navigator>
  );
};

export default MainNavigation;
