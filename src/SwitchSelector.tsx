import * as React from "react";
import {SwitchSelectorWrapper, OptionItem, OptionItemLabel} from "./SwitchSelector.styled";

type OptionType = {
    label: string;
    value: any;
    selectedBackgroundColor?: string;
    fontColor?: string;
    selectedFontColor?: string;
}

type PropsTypes = {
    onChange: Function;
    options: Array<OptionType>;
    initialSelectedIndex?: number;
    inputName?: string;

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
    const {onChange = () => null, options = [], initialSelectedIndex = 0, inputName = "reactSwitchSelector"} = props;
    const [selectedIndex, setSelectedIndex] = React.useState(initialSelectedIndex);

    const {
        border = 0,
        backgroundColor = "#ecf0f1",
        selectedBackgroundColor = "#2ecc71",
        wrapperBorderRadius = 20,
        optionBorderRadius = 18,
        fontSize = 14,
        fontColor = "#000",
        selectedFontColor = "#fff"
    } = props;

    const handleOnClick = (idx: number) => {
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
                    fontColor={option.fontColor || fontColor}
                    selectedFontColor={option.selectedFontColor || selectedFontColor}
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
            selectedBackgroundColor={options[selectedIndex].selectedBackgroundColor || selectedBackgroundColor}
            wrapperBorderRadius={wrapperBorderRadius}
            optionBorderRadius={optionBorderRadius}
        >
            <input value={options[selectedIndex].value || ""} name={inputName} type="hidden"/>
            {renderOptions()}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;