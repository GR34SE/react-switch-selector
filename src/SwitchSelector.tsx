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

const classNamesPrefix = "react-switch-selector";

const SwitchSelector = (props: PropsTypes) => {
    const {onChange = () => null, options = [], initialSelectedIndex = 0, wrapperStyles, optionStyles, selectedOptionStyles} = props;
    const [selectedIndex, setSelectedIndex] = React.useState(initialSelectedIndex);

    const handleOnClick = (idx) => {
        setSelectedIndex(idx);
        onChange(options[selectedIndex].value);
    };

    const renderOptions = () => {
        return options.map((option, idx) => {

            return (
                <OptionItem
                    key={idx}
                    selected={selectedIndex === idx}
                    onClick={() => handleOnClick(idx)}
                    overrideStyles={optionStyles}
                    optionsAmount={options.length}
                    className={`${classNamesPrefix}-option`}
                >
                    <span className={`${classNamesPrefix}-option-label`}>
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
            className={`${classNamesPrefix}-wrapper`}
        >
            {renderOptions()}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;