import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import COLORS from "../components/color";

const Payment = ({navigation}) => {
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={onCancel} style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 40 }}>
                    <View style={{ marginTop: 20 }}>
                        <View >
                            <View>
                                <View>
                                    <Text style={{color:'#ADADAD'}}></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Payment;