import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: 'Test primary',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Test clear',
    theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Test outlined',
    theme: ThemeButton.OUTLINED,
};
