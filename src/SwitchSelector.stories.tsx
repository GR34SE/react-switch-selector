import React from "react";
import {ComponentStory, ComponentMeta, Story} from "@storybook/react";
import SwitchSelector from "./SwitchSelector";
import {switchSelectorMocks} from "./SwitchSelector.mocks";

export default {
    title: "SwitchSelector",
    component: SwitchSelector
} as ComponentMeta<typeof SwitchSelector>;

const Template: ComponentStory<typeof SwitchSelector> = (args) => (
    <div style={{width: 300, height: 30}}>
        <SwitchSelector {...args} />
    </div>
);

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

export const OuterBorderRadius: Story = () => (
    <div style={{width: 300, height: 30}}>
        <SwitchSelector
            wrapperBorderRadius={8}
            optionBorderRadius={0}
            selectionIndicatorMargin={0}
            options={[
                {label: "Foo", value: "Foo"},
                {label: "Bar", value: "Bar"},
                {label: "Baz", value: "Baz"}
            ]}
        />
    </div>
);

export const MultipleInstances: Story = () => (
    <div style={{width: 300, height: 50}}>
        <SwitchSelector {...switchSelectorMocks} name={"first"} />
        <br />
        <SwitchSelector {...switchSelectorMocks} name={"second"} />
        <br />
        <SwitchSelector {...switchSelectorMocks} name={"third"} />
    </div>
);
