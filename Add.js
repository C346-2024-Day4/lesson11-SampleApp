import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const addContact = () => {
        fetch("https://retoolapi.dev/3mPAvR/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone })
        }).then(() => navigation.goBack());
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} />
            <Button title="Save Contact" onPress={addContact} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { borderBottomWidth: 1, marginBottom: 10, fontSize: 18 }
});

export default Add;
