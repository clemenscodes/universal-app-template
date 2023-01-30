import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { HomeScreen as Home } from './home';

const Story: ComponentMeta<typeof Home> = {
    component: Home,
    title: 'Home',
};
export default Story;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
