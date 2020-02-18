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
    const [selected, setSelected] = React.useState(options.length && (options[initialSelectedIndex] || options[0]));

    React.useEffect(() => {
        if(selected) onChange(selected.value);
    }, [selected]);

    const renderOptions = () => {
        return options.map((option, idx) => {
            const isSelected = (option === selected);
            const overrideStyles = {...optionStyles, ...(isSelected ? selectedOptionStyles : {})};

            return (
                <OptionItem
                    selected={isSelected}
                    onClick={() => setSelected(option)}
                    overrideStyles={overrideStyles}
                    key={idx}
                >
                    <span>{option.label}</span>
                </OptionItem>
            );
        });
    };

    return (
        <SwitchSelectorWrapper overrideStyles={wrapperStyles}>
            {renderOptions()}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;