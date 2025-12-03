// src/components/NPHeading.tsx
import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const NPHeading: React.FC<TextProps> = ({ style, ...rest }) => {
    return <Text {...rest} style={[styles.text, style]} />;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Baskervville',
    },
});

export default NPHeading;
