import { createParam } from 'solito';
import { Text, TextLink } from '../../styles/typography/typography';
import { View } from '../../styles/view/view';

const { useParam } = createParam<{ id: string }>();

export function UserScreen() {
    const [id] = useParam('id');
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
            <TextLink href="/">Go Home</TextLink>
        </View>
    );
}
