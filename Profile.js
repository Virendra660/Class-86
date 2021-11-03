import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      isEnabled:false,
      light_theme:true,
      profile_image:"",
      name:""
    };
  }

  toggleSwitch(){
    const previous_state=this.state.isEnabled
    const theme=!this.state.isEnabled?"dark":"light"
    var updates={}
    updates["/users"+firebase.auth.currentUserId.uid+"/current_theme"]=theme
    firebase.database().ref().update(updates)
    this.setState({
      isEnabled:!previous_state,light_theme:previous_state
    })
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {

    }
  }
}