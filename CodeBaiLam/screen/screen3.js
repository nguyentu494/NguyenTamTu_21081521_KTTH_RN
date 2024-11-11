import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import { addBike } from '../bikeSlice';
import {useState} from 'react'

export default function Screen3({navigation}) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    
    // const newBike = {
    //   name:'Pina Mountain',
    //   image: 'https://picsum.photos/200',
    //   model: parseFloat(449),
    // };

    const newBike = {
      name: name,
      image: image,
      model: parseFloat(price),
    };

    // Dispatch action addBike
    dispatch(addBike(newBike));

    navigation.navigate('Screen2')
  };

  return (
    <View style={styles.container}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.image}
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Ten</Text>
        <TextInput style={{border:1, backgroundColor:'white'}} onChangeText={(val) => {
          setName(val)
        }}/>
        
        <Text style={styles.title}>Gia</Text>
        <TextInput style={{border:1, backgroundColor:'white'}} onChangeText={(val) => {
          setPrice(val)
        }}/>

        <Text style={styles.title}>Hinh</Text>
        <TextInput style={{border:1, backgroundColor:'white'}} onChangeText={(val) => {
          setImage(val)
        }}/>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.wishlistButton}>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addButtonText}>Add to card</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  discountText: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginBottom: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  wishlistButton: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  addButton: {
    flex: 1,
    backgroundColor: '#ef4444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})