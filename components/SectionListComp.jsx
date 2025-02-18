import { View, Text, StyleSheet, SectionList } from 'react-native';
import React from 'react';

const users = [
    { id: 1, name: "Anil", data: ["PHP", "React JS", "Angular"] },
    { id: 2, name: "Peter", data: ["Java", "Spring Boot", "Hibernate"] },
    { id: 3, name: "Sonia", data: ["Python", "Django", "Flask"] },
    { id: 4, name: "Raj", data: ["JavaScript", "Node.js", "Express"] },
    { id: 5, name: "Monica", data: ["C#", ".NET", "Azure"] },
    { id: 6, name: "David", data: ["Ruby", "Rails", "Sinatra"] },
    { id: 7, name: "Sophia", data: ["Swift", "iOS", "Xcode"] },
    { id: 8, name: "Liam", data: ["Kotlin", "Android", "Jetpack"] },
    { id: 9, name: "Olivia", data: ["C++", "Qt", "OpenGL"] },
    { id: 10, name: "Ethan", data: ["Go", "Docker", "Kubernetes"] }
];

export default function SectionListComp() {
    return (
        <View style={styles.container}>
            <Text>Section list in react native</Text>
            <SectionList
                sections={users}
                renderSectionHeader={({ section: { name } }) => (
                    <Text style={styles.header}>{name}</Text>
                )}
                renderItem={({ item }) => (
                    <Text style={styles.item}>• {item}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#f4f4f4',
        padding: 5,
    },
    item: {
        fontSize: 16,
        paddingLeft: 10,
        marginVertical: 2,
    },
});
