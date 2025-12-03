// src/components/NPText.tsx
import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const NPText: React.FC<TextProps> = ({ style, ...rest }) => {
    return <Text {...rest} style={[styles.text, style]} />;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lora', // body font
    },
});

export default NPText;
