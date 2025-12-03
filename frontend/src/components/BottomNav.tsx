// src/components/BottomNav.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import NPText from './NPText';

export type TabKey = 'profile' | 'home' | 'goals' | 'news';

interface BottomNavProps {
    activeTab: TabKey;
    onTabChange: (tab: TabKey) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
    activeTab,
    onTabChange,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerRow}>
                {/* Profile */}
                <NavItem
                    label="Profile"
                    icon="👤"
                    isActive={activeTab === 'profile'}
                    onPress={() => onTabChange('profile')}
                />

                {/* Home */}
                <NavItem
                    label="Home"
                    icon="🏠"
                    isActive={activeTab === 'home'}
                    onPress={() => onTabChange('home')}
                />

                {/* Goals */}
                <NavItem
                    label="Goals"
                    icon="🎯"
                    isActive={activeTab === 'goals'}
                    onPress={() => onTabChange('goals')}
                />

                {/* News */}
                <NavItem
                    label="News"
                    icon="📰"
                    isActive={activeTab === 'news'}
                    onPress={() => onTabChange('news')}
                />
            </View>
        </View>
    );
};

type NavItemProps = {
    label: string;
    icon: string;
    isActive: boolean;
    onPress: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
    label,
    icon,
    isActive,
    onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.navItem}
            activeOpacity={0.7}
        >
            <NPText style={[styles.icon, isActive && styles.iconActive]}>{icon}</NPText>
            <NPText style={[styles.label, isActive && styles.labelActive]}>
                {label}
            </NPText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
        backgroundColor: '#ffffff',
        paddingBottom: 8,
        paddingTop: 4,
    },
    innerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 12,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 6,
    },
    icon: {
        fontSize: 20,
        color: '#9ca3af',
        marginBottom: 2,
    },
    iconActive: {
        color: '#000000',
    },
    label: {
        fontSize: 11,
        color: '#9ca3af',
    },
    labelActive: {
        color: '#000000',
        fontWeight: '600',
    },
});
