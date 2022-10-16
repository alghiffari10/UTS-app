import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, initialWindowMetrics } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';

const NavigateToDetail = (props) => {
  props.navigation.navigate('HomeScreen');
};

const DetailScreen2 = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2a2d43' }}>
      <View>
        <Image
          style={{ height: 270, resizeMode: 'cover', marginHorizontal: 0 }}
          source={{ uri: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562246284/autoexpress/2018/05/1bmwi8.jpg' }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.contentText}>BMW i8</Text>
          <View>
            <Text style={styles.contentPrice}>IDR 3.619.000.000</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <View style={styles.detail}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
              <Text style={{ color: 'white' }}>Engine</Text>
              <Text style={{ color: '#545b74' }}>3.5/194</Text>
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
            BMW i8, awalnya BMW Concept Vision Efficient Dynamics, adalah mobil sport hibrida plug-in yang dikembangkan oleh BMW. BMW i8 memiliki baterai ion litium 7,1 kwH yang memiliki jarak tempuh 37 km (23 mi) menurut New European
            Driving Cycle (NEDC).[2] Menurut Badan Perlindungan Lingkungan Amerika Serikat (EPA), jarak tempuh dengan mode listrik adalah 24 km (15 mi) dengan konsumsi bensin dalam jumlah kecil.[4]
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.truecar.com/used-cars-for-sale/listings/bmw/i8/')}>
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
export default DetailScreen2;
