import { Provider } from '@shared';
import { Stack } from 'expo-router';

export default function Root() {
    return (
        <Provider>
            <Stack />
        </Provider>
    );
}
