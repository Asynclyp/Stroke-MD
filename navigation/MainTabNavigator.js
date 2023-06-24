import React from "react";
// import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import TabBarIcon from '../components/TabBarIcon';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Platform from 'react-native'
import DecisionTree, {
  decisionTreeHeaderOptions,
} from "../screens/DecisionTree";
import LockTree from "../screens/Lock";
import LandingPage, { landingHeaderOptions } from "../screens/LandingPage";
import NIHSSCalc, { NIHSSCalHeaderOptions } from "../screens/NIHSSCalculator";
import Call, { callScreenHeaderOptions } from "../screens/CallScreen";
import ICHScreen, { ichHeaderOptions } from "../screens/ICHScreen";
import ComplicationScreen, {
  complicationScreenHeaderOptions,
} from "../screens/ComplicationScreen";
import OtherScreen, { otherScreenHeaderOptions } from "../screens/OtherScreen";
import Section1Screen, { sec1HeaderOptions } from "../screens/Section1Screen";
import SectionScreen2, { sec2HeaderOptions } from "../screens/SectionScreen2";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={({ navigation }) => landingHeaderOptions(navigation)}
      />
      <Stack.Screen
        name="Section1Screen"
        component={Section1Screen}
        options={({ navigation }) => sec1HeaderOptions(navigation)}
      />
      <Stack.Screen
        name="SectionScreen2"
        component={SectionScreen2}
        options={({ navigation }) => sec2HeaderOptions(navigation)}
      />
      <Stack.Screen
        name="ICHScreen"
        component={ICHScreen}
        options={({ navigation }) => ichHeaderOptions(navigation)}
      />
      <Stack.Screen
        name="ComplicationScreen"
        component={ComplicationScreen}
        options={({ navigation }) =>
          complicationScreenHeaderOptions(navigation)
        }
      />
    </Stack.Navigator>
  );
};

function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeScreenStack">
      <Tab.Screen
        name="NIHSSStack"
        component={NIHSSCalc}
        options={({ navigation }) => ({
          tabBarLabel: "NIHSS",
          tabBarActiveTintColor: "#a51417",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"bed"}
              size={25}
              color={focused ? "#a51417" : "#808080"}
            />
          ),
          ...NIHSSCalHeaderOptions(navigation),
        })}
      />
      <Tab.Screen
        name="DecisionTreeStack"
        component={DecisionTree}
        options={({ navigation }) => ({
          tabBarLabel: "Decision Tree",
          tabBarActiveTintColor: "#a51417",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"brain"}
              size={25}
              color={focused ? "#a51417" : "#808080"}
            />
          ),
          ...decisionTreeHeaderOptions(navigation),
        })}
      />
      <Tab.Screen
        name="HomeScreenStack"
        component={HomeScreenStack}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#a51417",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"home"}
              size={25}
              color={focused ? "#a51417" : "#808080"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CallStack"
        component={Call}
        options={({ navigation }) => ({
          tabBarLabel: "Call",
          tabBarActiveTintColor: "#a51417",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"phone"}
              size={25}
              color={focused ? "#a51417" : "#808080"}
            />
          ),
          ...callScreenHeaderOptions(navigation),
        })}
      />
      <Tab.Screen
        name="OtherStack"
        component={OtherScreen}
        options={({ navigation }) => ({
          tabBarLabel: "Resources",
          tabBarActiveTintColor: "#a51417",
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"dots-horizontal"}
              size={25}
              color={focused ? "#a51417" : "#808080"}
            />
          ),
          ...otherScreenHeaderOptions(navigation),
        })}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;

/* const HomeScreenStack = createStackNavigator(
  {
    LandingPage: LandingPage,
    Section1Screen: Section1Screen,
    SectionScreen2: SectionScreen2,
    ICHScreen: ICHScreen,
    ComplicationScreen: ComplicationScreen,
  }
  // config
);

HomeScreenStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    showIcon: true,
    activeTintColor: "#a51417",
  },
  tabBarIcon: ({ focused }) => (
    <Icon name={"home"} size={25} color={focused ? "#a51417" : "#808080"} />
  ),
};
HomeScreenStack.path = "";
//
//
const NIHSSStack = createStackNavigator(
  {
    NIHSSCalc: NIHSSCalc,
  }
  // config
);
NIHSSStack.navigationOptions = {
  tabBarLabel: "NIHSS",
  tabBarOptions: {
    showIcon: true,
    activeTintColor: "#a51417",
  },
  tabBarIcon: ({ focused }) => (
    <Icon name={"hotel"} size={25} color={focused ? "#a51417" : "#808080"} />
  ),
};

NIHSSStack.path = "";
//
//
const OtherStack = createStackNavigator(
  {
    OtherScreen: OtherScreen,
  }
  // config
);

OtherStack.navigationOptions = {
  tabBarLabel: "Resources",
  tabBarOptions: {
    showIcon: true,
    activeTintColor: "#a51417",
  },
  tabBarIcon: ({ focused }) => (
    <Icon
      name={"dots-horizontal"}
      size={25}
      color={focused ? "#a51417" : "#808080"}
    />
  ),
};
OtherStack.path = "";
//
//
const DecisionTreeStack = createStackNavigator(
  {
    home: DecisionTree,
  }
  // config
);
DecisionTreeStack.navigationOptions = {
  tabBarLabel: "Decision Tree",
  tabBarOptions: {
    showIcon: true,
    activeTintColor: "#a51417",
  },
  tabBarIcon: ({ focused }) => (
    <Icon name={"brain"} size={25} color={focused ? "#a51417" : "#808080"} />
  ),
};
DecisionTreeStack.path = "";

const CallStack = createStackNavigator(
  {
    Call: Call,
  }
  // config
);

CallStack.navigationOptions = {
  tabBarLabel: "Call",
  tabBarOptions: {
    showIcon: true,
    activeTintColor: "#a51417",
  },
  tabBarIcon: ({ focused }) => (
    <Icon name={"phone"} size={25} color={focused ? "#a51417" : "#808080"} />
  ),
};
OtherStack.path = "";

const tabNavigator = createAppContainer(
  createBottomTabNavigator({
    NIHSSStack,
    DecisionTreeStack,
    HomeScreenStack,
    CallStack,
    OtherStack,
  })
);

tabNavigator.path = "";

export default tabNavigator; */
