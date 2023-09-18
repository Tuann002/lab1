import React from "react";
import { View, Button,TouchableOpacity, Text, StyleSheet } from "react-native";
import App from "../App";

const Lab2 = () => 
{
    return(
        <View style={MyStyle.container}>
            <Button title="Button 1" onPress={() => alert("Hello 1")}/>
            <TouchableOpacity style={MyStyle.button} onPress={()=> alert("Hello 2")}>
                <text style={MyStyle.text}>
                    Button 2
                </text>
            </TouchableOpacity>
        </View>
    )
}

const MyStyle = StyleSheet.create(
    {
        container:{
        flex:1,
        justifyContent:"center"
        },
        
        button:{
            backgroundColor:"Blue",
            marginTop:10,
            alignItems: "center",
            padding: 10
        },
        
        text:{
            color:"white",
            fontSize: 18
        }
    }
)

export default Lab2;