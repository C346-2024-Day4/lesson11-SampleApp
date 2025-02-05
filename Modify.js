import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Modify = ({ route, navigation }) => {
    const { contact } = route.params;
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);

    const updateContact = () => {
        fetch(`https://retoolapi.dev/3mPAvR/contact/${contact.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone })
        }).then(() => navigation.goBack());
    };

    const deleteContact = () => {
        fetch(`https://retoolapi.dev/3mPAvR/contact/${contact.id}`, { method: "DELETE" })
            .then(() => navigation.goBack());
    };

    return (
        <View style={styles.container}>
            <TextInput value={name} onChangeText={setName} style={styles.input} />
            <TextInput value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput value={phone} onChangeText={setPhone} style={styles.input} />
            <Button title="Update Contact" onPress={updateContact} />
            <Button title="Delete Contact" onPress={deleteContact} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { borderBottomWidth: 1, marginBottom: 10, fontSize: 18 }
});

export default Modify;
