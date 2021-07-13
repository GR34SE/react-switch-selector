import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import SwitchSelector, {Props} from "./SwitchSelector";

const switchSelectorPropsMock: Props = {
    onChange: (value) => console.log(value),
    options: [
        {
            label: "Option 1",
            value: true
        },
        {
            label: "Option 2",
            value: 20
        },
        {
            label: "Option 3",
            value: "30"
        }
    ]
};

export default {
    title: SwitchSelector.name,
    component: SwitchSelector,
    argTypes: {
        selectedBackgroundColor: {control: "color"},
        fontColor: {control: "color"},
        selectedFontColor: {control: "color"}
    }
} as ComponentMeta<typeof SwitchSelector>;

const Template: ComponentStory<typeof SwitchSelector> = (args) => (
    <div style={{width: 300, height: 30}}>
        <SwitchSelector {...args} />
    </div>
);

export const OneOption = Template.bind({});
OneOption.args = {
    ...switchSelectorPropsMock,
    options: switchSelectorPropsMock.options.slice(0, 1)
};

export const TwoOptions = Template.bind({});
TwoOptions.args = {
    ...switchSelectorPropsMock,
    options: switchSelectorPropsMock.options.slice(0, 2)
};

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
    ...switchSelectorPropsMock
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...switchSelectorPropsMock,
    disabled: true
};
