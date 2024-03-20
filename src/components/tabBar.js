import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import COLORS from '../components/color';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#ffffff' , elevation:50}}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                let iconSource;
                if (label === 'Home') {
                    iconSource = require('../assets/home.png');
                } else if (label === 'Category') {
                    iconSource = require('../assets/category.png');
                } else if (label === 'My Cart') {
                    iconSource = require('../assets/cart.png');
                } else if (label === 'My Order') {
                    iconSource = require('../assets/myorder.png');
                } else if (label === 'Profile') {
                    iconSource = require('../assets/profile.png');
                }

                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: label === 'My Cart' ? -60 : 0,
                        }}
                        onPress={onPress}
                    >
                        {label === 'My Cart' ? (
                            <View style={{ width: 60, height: 60, borderRadius: 60, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={iconSource}
                                    style={{ width: 24, height: 24, tintColor: isFocused ? '#000' : '#fff' }}
                                />
                            </View>
                        ) : (
                            <>
                                <Image
                                    source={iconSource}
                                    style={{ width: isFocused ? 24 : 20, height: isFocused ? 24 : 20, tintColor: isFocused ? '#000000' : '#999999' }}
                                />
                                <Text style={{ color: '#000000', fontSize: 12, marginTop: 5, fontWeight: isFocused ? '600' : 'normal' }}>{label}</Text>
                            </>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );

};

export default CustomTabBar;
