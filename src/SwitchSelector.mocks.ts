import {OptionType, SwitchSelectorProps} from "./SwitchSelector.props";

const options: OptionType[] = [
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
];

export const switchSelectorMocks: SwitchSelectorProps = {
    options,
    onChange: (option): void => console.log("Selected option:", option),
    initialSelectedIndex: 0,
    forcedSelectedIndex: undefined,
    disabled: false
};
