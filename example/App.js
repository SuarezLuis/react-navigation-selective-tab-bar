/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import BottomTabBar from "react-navigation-selective-tab-bar";
class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen One</Text>
        <Text style={styles.number}>1</Text>
        <Text style={styles.instructions}>
          I AM on the bottom tab Navigator
        </Text>
        <View style={styles.buttons}>
          <Button
            title="One"
            onPress={() => this.props.navigation.navigate("One")}
          />
          <Button
            title="Two"
            onPress={() => this.props.navigation.navigate("Two")}
          />
          <Button
            title="Three"
            onPress={() => this.props.navigation.navigate("Three")}
          />
          <Button
            title="Four"
            onPress={() => this.props.navigation.navigate("Four")}
          />
        </View>
      </View>
    );
  }
}

class ScreenTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen Two</Text>
        <Text style={styles.number}>2</Text>
        <Text style={styles.instructions}>
          I am NOT on the bottom tab Navigator
        </Text>
        <View style={styles.buttons}>
          <Button
            title="One"
            onPress={() => this.props.navigation.navigate("One")}
          />
          <Button
            title="Two"
            onPress={() => this.props.navigation.navigate("Two")}
          />
          <Button
            title="Three"
            onPress={() => this.props.navigation.navigate("Three")}
          />
          <Button
            title="Four"
            onPress={() => this.props.navigation.navigate("Four")}
          />
        </View>
      </View>
    );
  }
}

class ScreenThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen Three</Text>
        <Text style={styles.number}>3</Text>
        <Text style={styles.instructions}>
          I AM on the bottom tab Navigator
        </Text>
        <View style={styles.buttons}>
          <Button
            title="One"
            onPress={() => this.props.navigation.navigate("One")}
          />
          <Button
            title="Two"
            onPress={() => this.props.navigation.navigate("Two")}
          />
          <Button
            title="Three"
            onPress={() => this.props.navigation.navigate("Three")}
          />
          <Button
            title="Four"
            onPress={() => this.props.navigation.navigate("Four")}
          />
        </View>
      </View>
    );
  }
}

class ScreenFour extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen Four</Text>
        <Text style={styles.number}>4</Text>
        <Text style={styles.instructions}>
          I am NOT on the bottom tab Navigator
        </Text>
        <View style={styles.buttons}>
          <Button
            title="One"
            onPress={() => this.props.navigation.navigate("One")}
          />
          <Button
            title="Two"
            onPress={() => this.props.navigation.navigate("Two")}
          />
          <Button
            title="Three"
            onPress={() => this.props.navigation.navigate("Three")}
          />
          <Button
            title="Four"
            onPress={() => this.props.navigation.navigate("Four")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  number: {
    fontSize: 50
  },
  buttons: {
    flexDirection: "row"
  }
});

const AppNavigator = createBottomTabNavigator(
  {
    One: {
      screen: ScreenOne
    },
    Two: {
      screen: ScreenTwo
    },
    Three: {
      screen: ScreenThree
    },
    Four: {
      screen: ScreenFour
    }
  },
  {
    tabBarComponent: props => {
      return (
        <BottomTabBar
          {...props} // Required
          display={["One", "Three"]} // Required
          background="black" // Optional
        />
      );
    }
  }
);

export default createAppContainer(AppNavigator);
