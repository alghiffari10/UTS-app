import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const NavigateToDetail = (props) => {
  props.navigation.navigate('DetailScreen');
};
const NavigateToDetail2 = (props) => {
  props.navigation.navigate('DetailScreen2');
};
const HomeScreen = (props) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#2a2d43' }}>
      <View style={styles.picture}>
        <Image
          style={{ width: 50, height: 50, resizeMode: 'stretch', borderRadius: 50 }}
          source={{ uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' }}
        />
        <View style={styles.headerText}>
          <Text style={{ color: 'white' }}>Hello, Raihan Alghiffari</Text>
          <Text style={styles.subHeader}>let's find a dream car</Text>
        </View>
      </View>
      <View>
        <Text style={styles.headerText2}>Last Seen</Text>
      </View>
      <View style={styles.lastSeen}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ height: 90, width: 200, resizeMode: 'cover', borderRadius: 10 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/2010_Nissan_GT-R_3.8_Front.jpg' }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.subHeader2}>Nissan GT-R R35</Text>
            <Text style={styles.contentText}>IDR 3.000.000.000</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.headerText2}>Recommended</Text>
      </View>
      <TouchableOpacity style={styles.contentCard} onPress={() => NavigateToDetail(props)}>
        <Image style={{ height: 170, resizeMode: 'cover', borderRadius: 20, marginHorizontal: 0 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/2010_Nissan_GT-R_3.8_Front.jpg' }} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.contentText}>Nissan GT-R R35</Text>
          <View style={{ paddingLeft: 100 }}>
            <Text style={styles.contentPrice}>IDR 3.000.000.000</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.contentSubText}>2020</Text>
          <View style={{ paddingLeft: 228 }}>
            <Text style={styles.contentSubText}>Best price</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentCard} onPress={() => NavigateToDetail2(props)}>
        <Image
          style={{ height: 170, resizeMode: 'cover', borderRadius: 20, marginHorizontal: 0 }}
          source={{ uri: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562246284/autoexpress/2018/05/1bmwi8.jpg' }}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.contentText}>BMW i8</Text>
          <View style={{ paddingLeft: 156 }}>
            <Text style={styles.contentPrice}>IDR 3.619.000.000</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.contentSubText}>2021</Text>
          <View style={{ paddingLeft: 228 }}>
            <Text style={styles.contentSubText}>Best price</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  picture: { marginLeft: 20, marginTop: 50, flexDirection: 'row' },
  headerText: {
    marginLeft: 20,
    flexDirection: 'column',
  },
  subHeader: {
    color: 'gray',
    fontSize: 12,
  },
  lastSeen: {
    height: 130,
    marginTop: 20,
    backgroundColor: '#545b74',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },
  headerText2: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  subHeader2: {
    color: '#b2b6bf',
    marginTop: 10,
    fontSize: 12,
    marginLeft: 10,
  },
  contentCard: {
    height: 270,
    marginTop: 20,
    marginLeft: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#545b74',
  },
  contentText: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
  },
  contentSubText: {
    marginTop: 10,
    marginLeft: 10,
    color: '#b2b6bf',
  },
  contentPrice: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default HomeScreen;
