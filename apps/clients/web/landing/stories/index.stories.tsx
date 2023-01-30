import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Index } from '../pages';

const Story: ComponentMeta<typeof Index> = {
    component: Index,
    title: 'Index',
};
export default Story;

const Template: ComponentStory<typeof Index> = () => <Index />;

export const Primary = Template.bind({});
Primary.args = {};
