import { SafeAreaProvider, SafeAreaProviderProps } from 'react-native-safe-area-context';

export function Provider({ children, initialMetrics, ...others }: SafeAreaProviderProps) {
    return (
        <SafeAreaProvider {...others} initialMetrics={initialMetrics}>
            {children}
        </SafeAreaProvider>
    );
}
