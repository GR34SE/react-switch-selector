import {OptionType, SwitchSelectorProps} from "./SwitchSelector.props";

type MockedOptionValue = boolean | number | string;

const options: OptionType<MockedOptionValue>[] = [
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
    onChange: (selectedOptionValue: MockedOptionValue): void =>
        console.log("Selected option value:", selectedOptionValue),
    initialSelectedIndex: 0,
    forcedSelectedIndex: undefined,
    disabled: false
};
