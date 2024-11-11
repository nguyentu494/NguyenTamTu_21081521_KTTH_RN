import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Heart } from 'lucide-react-native'

export default function Component() {
  return (
    <View style={styles.container}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.image}
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Pina Mountain</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.discountText}>15% OFF | 350$</Text>
          <Text style={styles.price}>449$</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.wishlistButton}>
            <Heart size={24} color="#000" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.addButton}>
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