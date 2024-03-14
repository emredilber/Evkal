import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import COLORS from "../components/color";

const Home = ({ navigation }) => {
    const [focus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    const aspectRatio = 80 / 112;
    const width = 18.5;
    const height = width / aspectRatio;
    const aspectRatio1 = 70 / 40;
    const width1 = 12;
    const height1 = width1 / aspectRatio1;
    const aspectRatio2 = 64 / 64;
    const width2 = 30;
    const height2 = width2 / aspectRatio2;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={onCancel} style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ marginTop: 20 }}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#ADADAD', }}>Location</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0, marginTop: 2 }}>
                                        <Image source={require('../assets/location.png')} style={{ width: width, height: height }} />
                                        <Text style={{ color: '#000', fontWeight: 700, fontSize: 16, marginHorizontal: 4 }}>My Flat</Text>
                                        <Image source={require('../assets/arrow.png')} style={{ width: width1, height: height1 }} />
                                    </View>
                                </View>
                                <View style={{ height: 50, width: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0F0F0' }}>
                                    <Image source={require('../assets/bell.png')} style={{ width: width2, height: height2 }} />
                                </View>
                            </View>

                            <View style={{ marginTop: 8, height: 44, paddingHorizontal: 20, borderWidth: 1, borderRadius: 15, borderColor: '#DCDCDC', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <View>
                                    <TextInput
                                        placeholder='example@gmail.com'
                                        placeholderTextColor='#B6B6B6'
                                        onFocus={() => setFocus(true)}
                                        style={{ flex: 1 }}
                                    ></TextInput>
                                </View>
                                <TouchableOpacity>
                                    <Image></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Home;