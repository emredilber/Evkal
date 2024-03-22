import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback, TouchableOpacityComponent } from 'react-native';
import COLORS from "../components/color";

const Home = ({ navigation }) => {
    const [focus, setFocus] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollViewRef = useRef(null);
    const windowWidth = Dimensions.get('window').width;

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    const images = [
        require('../assets/vegetable.png'),
        require('../assets/vegetable.png'),
        require('../assets/vegetable.png'),
        require('../assets/vegetable.png'),
        require('../assets/vegetable.png')
    ];

    const dots = images.map((_, index) => (
        <TouchableOpacity
            key={index}
            style={[styles.dot, selectedIndex === index && styles.selected]}
            onPress={() => handleDotPress(index)}
        />
    ));

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / windowWidth);
        setSelectedIndex(index);
    };

    const handleDotPress = (index) => {
        setSelectedIndex(index);
        scrollViewRef.current.scrollTo({ x: index * windowWidth });
    };

    const aspectRatio = 80 / 112;
    const width = 18.5;
    const height = width / aspectRatio;
    const aspectRatio1 = 70 / 40;
    const width1 = 12;
    const height1 = width1 / aspectRatio1;
    const aspectRatio2 = 64 / 64;
    const width2 = 24;
    const height2 = width2 / aspectRatio2;
    const aspectRatio3 = 51 / 53;
    const width3 = 34;
    const height3 = width3 / aspectRatio3;
    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor:'#fff'}}>
            <TouchableWithoutFeedback onPress={onCancel} style={{}}>
                <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
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
                            <TouchableOpacity style={{ height: 46, width: 46, borderRadius: 46, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0F0F0' }}>
                                <Image source={require('../assets/bell.png')} style={{ width: width2, height: height2 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', height: 44, paddingHorizontal: 15, borderWidth: 1, borderRadius: 15, borderColor: '#DCDCDC', marginRight: 20 }}>
                                <Image source={require('../assets/search.png')} style={{ height: 24, width: 22 }} />
                                <TextInput
                                    placeholder='example@gmail.com'
                                    placeholderTextColor='#B6B6B6'
                                    onFocus={() => setFocus(true)}
                                    style={{ paddingLeft: 12 }}
                                ></TextInput>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: COLORS.primary, borderRadius: 10, height: 44, width: 44, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../assets/settings.png')} style={{ width: width3, height: height3 }} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ height: 220, marginTop: 30, justifyContent: 'center', }}>
                        <ScrollView
                            ref={scrollViewRef}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={handleScroll}
                            scrollEventThrottle={200}
                        >
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    source={image}
                                    style={{ width: windowWidth, height: 200 }}
                                    resizeMode="contain"
                                />
                            ))}
                        </ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>{dots}</View>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, color: 'black' }}>Categories</Text>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 17, color: COLORS.primary, marginHorizontal: 10, fontWeight: 500 }}>See All</Text>
                                <Image source={require("../assets/arrow-right.png")} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.circle}>
                                    <Image source={require("../assets/jars.png")} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, color: 'black', }}>Jars</Text></View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.circle}>
                                    <Image source={require("../assets/chicken.png")} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, color: 'black', }}>Chicken</Text></View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.circle}>
                                    <Image source={require("../assets/fruits.png")} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, color: 'black', }}>Fruits</Text></View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.circle}>
                                    <Image source={require("../assets/sea-food.png")} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, color: 'black', }}>Sea Food</Text></View>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', marginTop: 15 }}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 17, color: 'black' }}>Recommend</Text>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: COLORS.primary, marginHorizontal: 10, fontWeight: 500 }}>See All</Text>
                                    <Image source={require("../assets/arrow-right.png")} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10 }}>
                                <TouchableOpacity style={{ borderRadius: 15, paddingHorizontal: 10, paddingVertical: 11, backgroundColor: '#D9D9D9' }}>
                                    <Image source={require("../assets/tomatos.png")} />
                                    <Text style={{ fontSize: 14, color: 'black', marginTop: 5, }}>Tomatos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderRadius: 15, paddingHorizontal: 10, paddingVertical: 11, backgroundColor: '#D9D9D9',}}>
                                    <View style={{ position: 'relative' }}>
                                        <Image source={require("../assets/apples.png")} />
                                    </View>
                                    <Image source={require("../assets/30.png")} style={{ position: 'absolute', top: 0, left: 0 }} />
                                    <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>Apples</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>


            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#6C7BB7',
        marginHorizontal: 5,
    },
    selected: {
        backgroundColor: '#27346A',
    },
});
export default Home;