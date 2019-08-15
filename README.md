# react-navigation-selective-tab-bar

Creates a custom TabBar where you can decide which routes to display

## Install

`npm install react-navigation-selective-tab-bar`

## Usage

````const AppNavigator = createBottomTabNavigator(
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
);```

## ScreenShots

![Screen One] (./images/one.png)
````
