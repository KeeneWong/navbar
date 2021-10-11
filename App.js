import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Button, ListItem, Avatar, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
import OpenApplication from 'react-native-open-application';
// import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
// import * as IntentLauncher from 'expo-intent-launcher';



var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    icon: 'user',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: 'user',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    icon: 'user',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: 'user',
    subtitle: 'Vice Chairman'
  },
];
console.log("111")


export default function App() {



  const [url, setUrl] = useState('https://www.hongkongairport.com/en/map/');
  const [webviewKey, setwebviewKey] = useState(1);
  const [page, setPage] = useState(1);
  const [number, onChangeNumber] = useState("")

  // let webview = null;

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />
      {page <= 3 ?
        <WebView source={{ uri: url }}
          key={webviewKey}
          style={styles.webviewdiv} />
        :
        <View
          style={styles.mainview} >
          {page == 5 ?
            <View>
              <Header
                // leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'PHONE', style: { color: '#fff' } }}
              // rightComponent={{ icon: 'home', color: '#fff' }}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                autoFocus={true}

              />
              {number != "" ?
                // <View style={styles.listview}>
                list.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                    <Icon name={l.icon} />
                    <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                      <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))
                : null
              }
            </View> : <View>
              <Header
                // leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'CONTACT', style: { color: '#fff' } }}
              // rightComponent={{ icon: 'home', color: '#fff' }}
              />{
                list.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                    <Icon name={l.icon} />
                    <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                      <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))
              }
            </View>
          }
        </View>}
      <View style={styles.bottomcontainer}>
        <Button
          // title="Map"
          type="outline"

          icon={
            <Icon
              name="map"
              size={15}
              color="#0388fc"
              iconContainerStyle={{ "margin-right": 10 }}
            />
          }
          // ref={(ref) => (this.webview = ref)}
          onPress={() => {
            setPage(1)
            console.log(url)
            if (url == 'https://www.hongkongairport.com/en/map/') {
              console.log('reloaded')
              setwebviewKey(webviewKey + 1)
            } else {
              setUrl('https://www.hongkongairport.com/en/map/')
            }
          }
          }

          buttonStyle={styles.buttondiv}
        />
        <Button
          // title="Flights"
          type="outline"

          icon={
            <Icon
              name="plane"
              size={20}
              color="#0388fc"
              iconContainerStyle={{ "margin-right": 10 }}
            />
          }

          onPress={() => {
            setPage(2)

            console.log(url)
            if (url == 'https://www.hongkongairport.com/en/flights/departures/passenger.page') {
              console.log('reloaded')
              setwebviewKey(webviewKey + 1)
            } else {
              setUrl('https://www.hongkongairport.com/en/flights/departures/passenger.page')
            }
          }
          }
          buttonStyle={styles.buttondiv}
        />
        <Button
          // icon={
          //   <Icon
          //     name="arrow-right"
          //     size={15}
          //     color="white"
          //   />
          // }
          type="outline"
          // title="Passenger Guide"
          icon={
            <Icon
              name="user"
              size={20}
              color="#0388fc"
              iconContainerStyle={{ "margin-right": 10 }}
            />
          }
          onPress={() => {
            setPage(3)

            console.log(url)
            if (url == 'https://www.hongkongairport.com/en/passenger-guide/arrivals/') {
              console.log('reloaded')
              setwebviewKey(webviewKey + 1)
            } else {
              setUrl('https://www.hongkongairport.com/en/passenger-guide/arrivals/')
            }
          }
          }
          buttonStyle={styles.buttondiv}
        />

        <Button
          // title="Map"
          type="outline"
          icon={
            <Icon
              name="book"
              size={20}
              color="#0388fc"
              iconContainerStyle={{ "margin-right": 10 }}
            />
          }

          // icon={
          //   <Icon
          //     name="map"
          //     size={15}
          //     color="white"
          //     iconContainerStyle={{ "margin-right": 10 }}
          //   />
          // }
          // ref={(ref) => (this.webview = ref)}
          onPress={() => {
            setPage(4)

            console.log(url)
            if (url == 'https://www.hongkongairport.com/en/passenger-guide/arrivals/') {
              console.log('reloaded')
              setwebviewKey(webviewKey + 1)
            } else {
              setUrl('https://www.hongkongairport.com/en/passenger-guide/arrivals/')
            }
          }
          }

          buttonStyle={styles.buttondiv}
        />

        <Button
          // title="Map"
          type="outline"
          icon={
            <Icon
              name="phone"
              size={20}
              color="#0388fc"
              iconContainerStyle={{ "margin-right": 10 }}
            />
          }

          // icon={
          //   <Icon
          //     name="map"
          //     size={15}
          //     color="white"
          //     iconContainerStyle={{ "margin-right": 10 }}
          //   />
          // }
          // ref={(ref) => (this.webview = ref)}
          onPress={() => {
            setPage(5)
            // let object = {
            //   packageName: "hello"
            // }
            console.log("test")
            // IntentLauncher.startActivityAsync(IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS, { packageName: "com.android.chrome" });

            OpenApplication.openApplication('com.your.app');

            // IntentLauncher.startAppByPackageName('com.android.chrome')
            //   .then((result) => {
            //     console.log('startAppByPackageName started');
            //   })

            // OpenApplication.openApplication('com.android.chrome');
          }
          }
          buttonStyle={styles.buttondiv}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  webviewdiv: {
    width: width,
    // backgroundColor: "red"

  },

  bottomcontainer: {
    height: 80,
    width: width,
    padding: 10,

    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttondiv: {
    // height: 400,
    // flexDirection: "row",
    // backgroundColor: "grey",
    // width: "50%",
    // borderRadius: 100,
    // flex: 1,
    width: 70,
    height: "100%"
    // flex: 1,
    // borderWidth: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  mainview: {
    flex: 1,
    width: width,
    // backgroundColor: "green"

  },

  listview: {
    flex: 1,
    width: width,
    height: 700,
    backgroundColor: "red"
    // backgroundColor: "green"

  },
});
