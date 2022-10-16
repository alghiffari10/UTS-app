import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, initialWindowMetrics } from 'react-native-safe-area-context';
const NavigateToDetail = (props) => {
  props.navigation.navigate('HomeScreen');
};

const DetailScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2a2d43' }}>
      <View>
        <Image style={{ height: 270, resizeMode: 'cover', marginHorizontal: 0 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/2010_Nissan_GT-R_3.8_Front.jpg' }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.contentText}>Nissan GT-R R35</Text>
          <View>
            <Text style={styles.contentPrice}>IDR 3.000.000.000</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <View style={styles.detail}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
              <Text style={{ color: 'white' }}>Engine</Text>
              <Text style={{ color: '#545b74' }}>2.5/194</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
              <Text style={{ color: 'white' }}>Seats</Text>
              <Text style={{ color: '#545b74' }}>2</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
              <Text style={{ color: 'white' }}>Condition</Text>
              <Text style={{ color: '#545b74' }}>Perfect</Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>
            Nissan GT-R adalah sebuah mobil sport yang dibuat oleh Nissan, dikeluarkan di Jepang pada tanggal 6 Desember 2007, Amerika Serikat pada tanggal 7 Juli 2008, dan seluruh dunia pada bulan Maret 2009.[1][2][3] Mobil ini merupakan
            penerus dari jajaran Skyline GT-R.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.mobil123.com/mobil-dijual/nissan/gt-r/indonesia')}>
            <Text>BUY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    marginRight: 10,
    color: 'white',

    fontWeight: 'bold',
  },
  detail: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: '#2e354e',
  },
  button: {
    width: 300,
    height: 50,
    paddingTop: 15,
    marginTop: 30,
    marginHorizontal: 0,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
});
export default DetailScreen;
