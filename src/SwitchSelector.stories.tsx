import React from "react";
import {StoryFn, Meta} from "@storybook/react";
import SwitchSelector from "./SwitchSelector";
import {switchSelectorMocks} from "./SwitchSelector.mocks";

export default {
    title: "SwitchSelector",
    component: SwitchSelector
} as Meta<typeof SwitchSelector>;

const Template: StoryFn<typeof SwitchSelector> = (args) => (
    <div style={{width: 300, height: 30}}>
        <SwitchSelector {...args} />
    </div>
);

export const TwoOptions = {
    render: Template,

    args: {
        ...switchSelectorMocks,
        options: switchSelectorMocks.options.slice(0, 2)
    }
};

export const ThreeOptions = {
    render: Template,

    args: {
        ...switchSelectorMocks,
        initialSelectedIndex: Math.floor(switchSelectorMocks.options.length / 2)
    }
};

export const Disabled = {
    render: Template,

    args: {
        ...switchSelectorMocks,
        disabled: true
    }
};

export const OuterBorderRadius: StoryFn = () => (
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

export const MultipleInstances: StoryFn = () => (
    <div style={{width: 300, height: 50}}>
        <SwitchSelector {...switchSelectorMocks} name={"first"} />
        <br />
        <SwitchSelector {...switchSelectorMocks} name={"second"} />
        <br />
        <SwitchSelector {...switchSelectorMocks} name={"third"} />
    </div>
);
