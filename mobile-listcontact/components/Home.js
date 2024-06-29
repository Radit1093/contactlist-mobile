import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'Myself', phone: '+62 895 1475 0080', photo: require('../assets/Myself.jpg') },
  { id: '2', name: 'Fadhil TI A', phone: '+62 896 6398 4287', photo: require('../assets/Fadhil.jpg') },
  { id: '3', name: 'Raihan TI A', phone: '+62 838 1801 5271', photo: require('../assets/Raihan.jpg') },
  { id: '4', name: 'Nii-Isni', phone: '+62 895 3650 64742', photo: require('../assets/Nii.jpg') },
  { id: '5', name: 'Rifaldi TI A', phone: '+62 812 8762 4263', photo: require('../assets/Rifaldi.jpg') },
  { id: '6', name: 'Faisal TI A', phone: '+62 812 8023 0924', photo: require('../assets/Faisal.jpg') },
  { id: '7', name: 'Dani TI A', phone: '+62 852 1997 1516', photo: require('../assets/Dani1.jpg') },
  { id: '8', name: 'Susan SMAN4', phone: '+62 898 7570 739', photo: require('../assets/Susan1.jpg') },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => navigation.navigate('Detail', { contact: item })}
          >
            <View style={styles.contactDetails}>
              <Image source={item.photo} style={styles.contactPhoto} />
              <View style={styles.infoContainer}>
                <Text style={styles.contactName}>{item.name}</Text>
                {item.phone && <Text style={styles.contactPhone}>{item.phone}</Text>}
              </View>
            </View>
            <Image source={require('../assets/chevron.png')} style={styles.chevron} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Lighter border
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2, // Subtle shadow
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 10, // Added spacing between items
  },
  contactDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  infoContainer: {
    justifyContent: 'center', // Center text vertically
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold', // Bold name
    marginBottom: 5, // Added spacing between name and phone
  },
  contactPhone: {
    fontSize: 14,
    color: '#888', // Subtler phone number color
  },
  chevron: {
    width: 18,
    height: 18,
    tintColor: '#ccc', // Light chevron color
  },
});

export default Home;
