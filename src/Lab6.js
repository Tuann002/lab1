import React from "react"; 
import { View, Text, StyleSheet, ScrollView } from "react-native"; 

const styles =  StyleSheet.create({ 
    container:{ backgroundColor: "#fff"}, 
    box: { 
        width: 100, 
        JustifyContent: "center", 
        height: 100, 
        margin: 20, 
        alignItems: "center",
    },
}); 
    
const Square = ({ text, bgColor = "#7ce0f9" }) => ( 
    <View style = {[styles.box, { backgroundColor: bgColor }]}> 
        <Text>(nhập dữ liệu)</Text>
    </View>
);

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 

const Lab6 = () => {   
    return ( <ScrollView style={styles.container}>   
    {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
    ))}
    </ScrollView>
    );
};

export default Lab6;