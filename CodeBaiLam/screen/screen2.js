import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../bikeSlice';

export default function Component() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [favorites, setFavorites] = useState();




  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.bikes);

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);
  
  console.log(data)

  const filters = ['All', 'Roadbike', 'Mountain'];

  const bikes = [
    {
      id: '1',
      name: 'Pinarello',
      model: '1800',
      image: 'https://picsum.photos/200',
    },
    {
      id: '2',
      name: 'Plus Mountain',
      model: '1700',
      image: 'https://picsum.photos/200',
    },
    {
      id: '3',
      name: 'Plus Bike',
      model: '1500',
      image: 'https://picsum.photos/200',
    },
    {
      id: '4',
      name: 'Pinarello',
      model: '1900',
      image: 'https://picsum.photos/200',
    },
    {
      id: '5',
      name: 'Pinarello',
      model: '2700',
      image: 'https://picsum.photos/200',
    },
    {
      id: '6',
      name: 'Pinarello',
      model: '1350',
      image: 'https://picsum.photos/200',
    }
  ];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter(filter)}>
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.filterTextActive,
              ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.bikeGrid}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.bikeCard}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.bikeImage}
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    style={styles.heartButton}
                    onPress={() => toggleFavorite(item.id)}></TouchableOpacity>
                </View>
                <Text style={styles.bikeName}>{item.name}</Text>
                <Text style={styles.bikeModel}>{item.model}</Text>
              </View>
            );
          }}
          numColumns={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ff4757',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e1e1e1',
  },
  filterButtonActive: {
    backgroundColor: '#ff4757',
    borderColor: '#ff4757',
  },
  filterText: {
    color: '#666',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
  },
  bikeGrid: {
    justifyContent: 'space-between',
    flex:1
  },
  bikeCard: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#F7BA8326',
    marginLeft:12,
    paddingBottom:8

  },
  imageContainer: {
    borderRadius: 12,
    padding: 10,
    marginBottom: 8,
  },
  bikeImage: {
    width: '100%',
    height: 120,
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00000099',
    textAlign:'center'
  },
  bikeModel: {
    fontSize: 14,
    fontWeight:'bold',
    textAlign:'center'
  },
});
