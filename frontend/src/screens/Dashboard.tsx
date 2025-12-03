import React, { useState } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import NPText from '../components/NPText';
import NPHeading from '../components/NPHeading';

// --- Types & mock data ---

type IndicatorTrend = 'up' | 'down' | 'neutral';

type Indicator = {
    name: string;
    value: string;
    signal: string;
    description: string;
    trend: IndicatorTrend;
};

const indicators: Indicator[] = [
    {
        name: 'RSI (14)',
        value: '58.32',
        signal: 'Neutral',
        description:
            'Relative Strength Index indicates neither overbought nor oversold conditions.',
        trend: 'neutral',
    },
    {
        name: 'MACD',
        value: '+124.5',
        signal: 'Bullish',
        description:
            'Moving Average Convergence Divergence shows positive momentum.',
        trend: 'up',
    },
    {
        name: 'Moving Average (50)',
        value: '$45,892',
        signal: 'Above',
        description:
            'Current portfolio value is above the 50-day moving average.',
        trend: 'up',
    },
    {
        name: 'Bollinger Bands',
        value: 'Mid-Upper',
        signal: 'Positive',
        description:
            'Price is trading in the upper half of the Bollinger Bands.',
        trend: 'up',
    },
    {
        name: 'Volume Trend',
        value: '+18%',
        signal: 'Increasing',
        description:
            'Trading volume is 18% above average for this period.',
        trend: 'up',
    },
    {
        name: 'Sharpe Ratio',
        value: '1.47',
        signal: 'Good',
        description:
            'Risk-adjusted returns are favorable compared to volatility.',
        trend: 'neutral',
    },
];

const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

// --- Main Dashboard component ---

const Dashboard: React.FC = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState<string>('1M');

    // Mock portfolio summary
    const totalValue = 47392.18;
    const todayChange = 2847.32;
    const todayChangePct = 6.39;

    const isGain = todayChange >= 0;

    return (
        <View style={styles.root}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Portfolio Value */}
                <View style={styles.section}>
                    <NPText style={styles.label}>Total Portfolio Value</NPText>
                    <NPText style={styles.totalValue}>
                        ${totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </NPText>

                    <View style={styles.changeRow}>
                        <NPText style={styles.changeText}>
                            {isGain ? '+' : '-'}
                            {Math.abs(todayChange).toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                            })}
                        </NPText>
                        <NPText style={styles.changeText}>
                            ({isGain ? '+' : '-'}
                            {Math.abs(todayChangePct).toFixed(2)}%)
                        </NPText>
                        <NPText style={styles.changeLabel}>Today</NPText>
                    </View>
                </View>

                {/* Portfolio Chart (placeholder) */}
                <View style={styles.section}>
                    {/* Timeframe selector */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.timeframeRow}
                    >
                        {timeframes.map((tf) => {
                            const selected = tf === selectedTimeframe;
                            return (
                                <TouchableOpacity
                                    key={tf}
                                    onPress={() => setSelectedTimeframe(tf)}
                                    style={[
                                        styles.timeframeButton,
                                        selected && styles.timeframeButtonSelected,
                                    ]}
                                >
                                    <NPText
                                        style={[
                                            styles.timeframeText,
                                            selected && styles.timeframeTextSelected,
                                        ]}
                                    >
                                        {tf}
                                    </NPText>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>

                    {/* Chart box – placeholder for now */}
                    <View style={styles.chartPlaceholderBox}>
                        <NPText style={styles.chartPlaceholderText}>
                            Portfolio chart goes here ({selectedTimeframe})
                        </NPText>
                    </View>
                </View>

                {/* Technical Analysis section */}
                <View style={styles.section}>
                    <NPText style={styles.sectionTitle}>Technical Analysis</NPText>

                    {/* Indicator cards */}
                    <View style={styles.indicatorGrid}>
                        {indicators.map((indicator) => (
                            <View key={indicator.name} style={styles.indicatorCard}>
                                <View style={styles.indicatorHeader}>
                                    <View style={styles.indicatorTitleArea}>
                                        <NPText style={styles.indicatorName} numberOfLines={1}>
                                            {indicator.name}
                                        </NPText>
                                        <NPText style={styles.indicatorValue}>{indicator.value}</NPText>
                                    </View>

                                    {/* Trend "icon" placeholder */}
                                    <View style={styles.trendBadge}>
                                        <NPText style={styles.trendSymbol}>
                                            {indicator.trend === 'up'
                                                ? '↑'
                                                : indicator.trend === 'down'
                                                    ? '↓'
                                                    : '•'}
                                        </NPText>
                                    </View>
                                </View>

                                {/* Signal pill */}
                                <View style={styles.signalPill}>
                                    <NPText style={styles.signalText}>{indicator.signal}</NPText>
                                </View>

                                <NPText style={styles.indicatorDescription}>
                                    {indicator.description}
                                </NPText>
                            </View>
                        ))}
                    </View>

                    {/* Overall summary */}
                    <View style={styles.overallCard}>
                        <NPText style={styles.overallTitle}>Overall Signal</NPText>
                        <View style={styles.overallRow}>
                            <NPText style={styles.overallSymbol}>↑</NPText>
                            <NPText style={styles.overallStatus}>Bullish</NPText>
                        </View>
                        <NPText style={styles.overallDescription}>
                            Technical indicators suggest positive momentum with most signals
                            trending bullish. Use this as one input alongside fundamentals and
                            your own strategy.
                        </NPText>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Dashboard;

// --- Styles (black / white / grayscale only) ---

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 8, // or 0 if you want it super snug
        paddingBottom: 32,
    },
    section: {
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 4,
    },
    totalValue: {
        fontSize: 32,
        fontWeight: '300',
        color: '#000000',
        marginBottom: 8,
    },
    changeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
    },
    changeText: {
        fontSize: 14,
        color: '#000000',
    },
    changeLabel: {
        fontSize: 14,
        color: '#6b7280',
    },
    timeframeRow: {
        paddingVertical: 4,
    },
    timeframeButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#d1d5db',
        marginRight: 8,
    },
    timeframeButtonSelected: {
        backgroundColor: '#000000',
        borderColor: '#000000',
    },
    timeframeText: {
        fontSize: 14,
        color: '#4b5563',
    },
    timeframeTextSelected: {
        color: '#ffffff',
    },
    chartPlaceholderBox: {
        marginTop: 12,
        height: 260,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb',
    },
    chartPlaceholderText: {
        color: '#6b7280',
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 12,
    },
    indicatorGrid: {
        gap: 12,
        marginBottom: 16,
    },
    indicatorCard: {
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 12,
        padding: 12,
        backgroundColor: '#ffffff',
    },
    indicatorHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    indicatorTitleArea: {
        flex: 1,
        marginRight: 8,
    },
    indicatorName: {
        fontSize: 14,
        color: '#111827',
        marginBottom: 2,
    },
    indicatorValue: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
    },
    trendBadge: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#d1d5db',
        alignItems: 'center',
        justifyContent: 'center',
    },
    trendSymbol: {
        fontSize: 16,
        color: '#111827',
    },
    signalPill: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        marginBottom: 6,
    },
    signalText: {
        fontSize: 12,
        color: '#111827',
    },
    indicatorDescription: {
        fontSize: 12,
        color: '#4b5563',
    },
    overallCard: {
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 12,
        padding: 12,
        backgroundColor: '#f9fafb',
    },
    overallTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8,
    },
    overallRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        gap: 6,
    },
    overallSymbol: {
        fontSize: 18,
        color: '#000000',
    },
    overallStatus: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
    },
    overallDescription: {
        fontSize: 13,
        color: '#4b5563',
    },
});
