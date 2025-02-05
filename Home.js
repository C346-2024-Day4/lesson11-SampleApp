import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("https://retoolapi.dev/3mPAvR/contact")
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error("Error fetching contacts:", error));
    }, [contacts]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Modify', { contact: item })} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>{item.email}</Text>
            <Text style={styles.details}>{item.phone}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <Button title="Add Contact" onPress={() => navigation.navigate('Add')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    item: { padding: 10, fontSize: 18, borderBottomWidth: 1 }
});

export default Home;
