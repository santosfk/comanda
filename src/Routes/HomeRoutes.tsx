import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Checkin } from "../Screens/Checkin";
import { Home } from "../Screens/HomeScreens/Home";
import { AntDesign, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Search } from "../Screens/HomeScreens/Search";
import { User } from "../Screens/HomeScreens/User";
const Tab = createBottomTabNavigator();
export const HomeRoutes = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown:false,
      tabBarIcon: ({ focused, size }) => {
        let iconName;
        let color = focused? "#2EDBBC" : 'black'
        if (route.name === 'home') { 
          return <Entypo name="home"  size={size} color={color}/> 
         }
         if(route.name === 'search'){
          return <FontAwesome name="search" size={size} color={color}/>
         }
         if(route.name === 'user'){
          return <FontAwesome name="user" size={size} color={color}/>
         }
         
    

        // You can return any component that you like here!
       
      
      },
      tabBarActiveTintColor: '#2EDBBC',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="home" component={Home}  />
      <Tab.Screen name="search" component={Search}  />
      <Tab.Screen name="user" component={User}  />
    </Tab.Navigator>
  );
};
