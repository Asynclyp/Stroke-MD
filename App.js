import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
// import { AppLoading } from 'expo';
import * as SplashScreen from "expo-splash-screen";
import * as Icon from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AppNavigator from "./navigation/AppNavigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this._loadResourcesAsync = this._loadResourcesAsync.bind(this);
    this._loadResourcesAsync();
  }

  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return null;
    }
    /* if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else { */
    return (
      <View style={styles.container} onLayout={this.onLayoutRootView}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
    // }
  }

  onLayoutRootView = async () => {
    if (this.state.isLoadingComplete) {
      // This tells the splash screen to hide immediately! If we call this after
      // `isLoadingComplete`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png"),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        courier: require("./assets/fonts/courier.ttf"),
      }),
    ])
      .catch(this._handleLoadingError)
      .finally(this._handleFinishLoading);
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
