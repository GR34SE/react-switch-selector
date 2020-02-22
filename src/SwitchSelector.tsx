import * as React from "react";
import {SwitchSelectorWrapper, OptionItem, OptionItemLabel} from "./SwitchSelector.styled";

type Option = {
    label: string;
    value: any;
}

type PropsTypes = {
    onChange: Function;
    options: Array<Option>;
    initialSelectedIndex?: number;

    //Styles
    border?: string | number;
    backgroundColor?: string;
    selectedBackgroundColor?: string;
    wrapperBorderRadius?: number;
    optionBorderRadius?: number;
    fontSize?: number;
    fontColor?: string;
    selectedFontColor?: string;
}

const classNamesPrefix = "react-switch-selector";

const SwitchSelector = (props: PropsTypes) => {
    const {onChange = () => null, options = [], initialSelectedIndex = 0} = props;
    const [selectedIndex, setSelectedIndex] = React.useState(initialSelectedIndex);

    const {
        border = 0,
        backgroundColor,
        selectedBackgroundColor,
        wrapperBorderRadius = 20,
        optionBorderRadius = 18,
        fontSize = 14,
        fontColor,
        selectedFontColor
    } = props;

    const handleOnClick = (idx) => {
        setSelectedIndex(idx);
        onChange(options[selectedIndex].value);
    };

    const renderOptions = () => {
        return options.map((option, idx) => (
            <OptionItem
                key={idx}
                onClick={() => handleOnClick(idx)}
                optionsAmount={options.length}
                className={`${classNamesPrefix}-option`}

                optionBorderRadius={optionBorderRadius}
            >
                <OptionItemLabel
                    selected={selectedIndex === idx}
                    className={`${classNamesPrefix}-option-label`}

                    fontSize={fontSize}
                    fontColor={fontColor}
                    selectedFontColor={selectedFontColor}
                >
                    {option.label}
                </OptionItemLabel>
            </OptionItem>
        ));
    };

    if (!options.length) return null;
    return (
        <SwitchSelectorWrapper
            selectedIndex={selectedIndex}
            optionsAmount={options.length}
            className={`${classNamesPrefix}-wrapper`}

            border={border}
            backgroundColor={backgroundColor}
            selectedBackgroundColor={selectedBackgroundColor}
            wrapperBorderRadius={wrapperBorderRadius}
            optionBorderRadius={optionBorderRadius}
        >
            {renderOptions()}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;