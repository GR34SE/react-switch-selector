import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import SwitchSelector from "./SwitchSelector";
import {switchSelectorMocks} from "./SwitchSelector.mocks";

export default {
    title: SwitchSelector.name,
    component: SwitchSelector
} as ComponentMeta<typeof SwitchSelector>;

const Template: ComponentStory<typeof SwitchSelector> = (args) => (
    <div style={{width: 300, height: 30}}>
        <SwitchSelector {...args} />
    </div>
);

const MultiTemplate: ComponentStory<typeof SwitchSelector> = (args) => (
    <div style={{width: 300, height: 30}}>
        <SwitchSelector {...args} />
        <input type="text"></input>
        <SwitchSelector {...args} />
    </div>
);

export const OneOption = Template.bind({});
OneOption.args = {
    ...switchSelectorMocks,
    options: switchSelectorMocks.options.slice(0, 1)
};

export const TwoOptions = Template.bind({});
TwoOptions.args = {
    ...switchSelectorMocks,
    options: switchSelectorMocks.options.slice(0, 2)
};

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
    ...switchSelectorMocks,
    initialSelectedIndex: Math.floor(switchSelectorMocks.options.length / 2)
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...switchSelectorMocks,
    disabled: true
};

export const TwoSwitches = MultiTemplate.bind({});
TwoSwitches.args = {
    ...switchSelectorMocks,
    options: switchSelectorMocks.options.slice(0, 2)
};
