import React from "react";
import { Platform } from "react-native";
// import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "@react-navigation/stack";
import LockTreeStack from "../screens/Lock";

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    this.props.navigation.navigate("Lock");
  };
  render() {
    return null;
  }
}

const Stack = createStackNavigator();

function LoginNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lock" component={LockTreeStack} />
      <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
    </Stack.Navigator>
  );
}

export default LoginNavigator;

/* export default createAppContainer(createSwitchNavigator(
    {
        Lock: LockTreeStack,
        AuthLoading: AuthLoadingScreen
    },
    {
        initialRouteName: 'Lock',
    }
)); */
