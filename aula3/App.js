/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import titulo from "./componentes/titulo";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.barTop}>
          <titulo estilo={styles.text1} value="TITULO" />
        </View>
        <View style={styles.fundo}>
          <Text>Fundo </Text>
        </View>
        <View style={styles.barButton}>
          <Text style={styles.text1}>1 </Text>
          <Text style={styles.text2}>2 </Text>
          <Text style={styles.text3}>3 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "space-between"
  },
  barTop: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  fundo: {
    flex: 8
  },
  barButton: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row"
  },
  text1: {
    backgroundColor: "#8e44ad",
    flexGrow: 1,
    height: 60
  },
  text2: {
    backgroundColor: "#e74c3c",
    flexGrow: 1,
    height: 60
  },
  text3: {
    backgroundColor: "#2c3e50",
    flexGrow: 1,
    height: 60
  }
});
