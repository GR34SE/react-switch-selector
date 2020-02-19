import * as React from "react";
import {SwitchSelectorWrapper, OptionItem} from "./SwitchSelector.styled";

type Option = {
    label: string;
    value: any;
}

type PropsTypes = {
    onChange: Function;
    options: Array<Option>;
    initialSelectedIndex?: number;
    wrapperStyles?: any;
    optionStyles?: any;
    selectedOptionStyles?: any;
}

const SwitchSelector = (props: PropsTypes) => {
    const {onChange = () => null, options = [], initialSelectedIndex = 0, wrapperStyles, optionStyles, selectedOptionStyles} = props;
    const [selectedIndex, setSelectedIndex] = React.useState(initialSelectedIndex);

    React.useEffect(() => {
        onChange(options[selectedIndex].value);
    }, [selectedIndex]);

    const renderOptions = () => {
        return options.map((option, idx) => {

            return (
                <OptionItem
                    key={idx}
                    selected={selectedIndex === idx}
                    onClick={() => setSelectedIndex(idx)}
                    overrideStyles={optionStyles}
                    optionsAmount={options.length}
                >
                    <span>
                        {option.label}
                    </span>
                </OptionItem>
            );
        });
    };

    return (
        <SwitchSelectorWrapper
            selectedOptionStyles={selectedOptionStyles}
            selectedIndex={selectedIndex}
            optionsAmount={options.length}
            overrideStyles={wrapperStyles}
        >
            {renderOptions()}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;