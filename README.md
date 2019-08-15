# react-navigation-selective-tab-bar

Creates a custom TabBar where you can decide which routes to display

## Install

`npm install react-navigation-selective-tab-bar`

## Usage

```const AppNavigator = createBottomTabNavigator(
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
```

## ScreenShots

<img src="/images/one.png" width="30%" height="auto"/> <img src="/images/two.png" width="30%" height="auto"/>  
<img src="/images/three.png" width="30%" height="auto"/> <img src="/images/four.png" width="30%" height="auto"/>

## Example

`git clone https://github.com/suarezluis/react-navigation-selective-tab-bar.git`  
`cd react-navigation-selective-tab-bar`  
`cd example`  
`npm install` or `yarn install`  
`react-native run-ios` or `react-native run-android`
