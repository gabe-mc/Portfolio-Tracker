// src/components/Header.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import NPText from './NPText';
import NPHeading from './NPHeading';

export const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerRow}>
                {/* Left: Brand name */}
                <View style={styles.leftBlock}>
                    <NPHeading style={styles.title}>NorthPeak</NPHeading>
                </View>

                {/* Right: action icons (simple emoji placeholders for now) */}
                <View style={styles.rightBlock}>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                        <NPText style={styles.iconText}>🔔</NPText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                        <NPText style={styles.iconText}>👤</NPText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                        <NPText style={styles.iconText}>☰</NPText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        backgroundColor: '#ffffff',
    },
    innerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        paddingHorizontal: 16,
    },
    leftBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
    },
    rightBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        padding: 6,
        borderRadius: 999,
        marginLeft: 4,
    },
    iconText: {
        fontSize: 18,
        color: '#000000',
    },
});
