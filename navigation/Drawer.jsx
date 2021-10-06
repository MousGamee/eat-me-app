import React from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import MainNavigation from "./MainNavigation";

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label="Notification"
          onPress={() => props.navigation.navigate("Notification")}
        />
      </DrawerItemList>
    </DrawerContentScrollView>
  );
};
export default () => {
  return (
    <Drawer.Navigator
    initialRouteName='Home'
    drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Screen" component={MainNavigation} />
    </Drawer.Navigator>
  );
};
