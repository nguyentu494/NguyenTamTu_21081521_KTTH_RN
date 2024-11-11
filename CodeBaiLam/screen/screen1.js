import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Component({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          A premium online store for{'\n'}sporter and their stylish choice
        </Text>
        
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.bikeImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.shopText}>
          POWER BIKE SHOP
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {
          navigation.navigate('Screen2')
        }}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  headerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 24,
    lineHeight: 24,
  },
  imageContainer: {
    padding: 20,
    backgroundColor: '#E941411A',
    borderRadius: 12,
    marginBottom: 24,
  },
  bikeImage: {
    width: '100%',
    height: 200,
  },
  shopText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
    color: '#1a1a1a',
  },
  button: {
    backgroundColor: '#ff4757',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
