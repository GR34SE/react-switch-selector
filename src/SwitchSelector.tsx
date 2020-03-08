import * as React from "react";
import {SwitchSelectorWrapper, OptionItem, OptionItemLabel, OptionInput} from "./SwitchSelector.styled";
import {StylingPropsTypes} from "./SwitchSelector.styled";

type OptionType = {
    label: string;
    value: any;
    selectedBackgroundColor?: string;
    fontColor?: string;
    selectedFontColor?: string;
}

interface PropsTypes extends Partial<StylingPropsTypes> {
    onChange: Function;
    options: Array<OptionType>;
    initialSelectedIndex?: number;
}

const classNamesPrefix = "react-switch-selector";

const SwitchSelector = (props: PropsTypes) => {
    const {onChange = (value: any) => (console.log(value)), options = [], initialSelectedIndex = 0} = props;
    const [selectedIndex, setSelectedIndex] = React.useState(initialSelectedIndex);

    const {
        border = 0,
        backgroundColor = "#ecf0f1",
        selectedBackgroundColor = "#2ecc71",
        wrapperBorderRadius = 20,
        optionBorderRadius = 18,
        fontSize = 14,
        fontColor = "#000",
        selectedFontColor = "#fff",
        selectionIndicatorMargin = 2
    } = props;

    const handleOnClick = (idx: number) => {
        if(idx !== selectedIndex){
            setSelectedIndex(idx);
            onChange(options[idx].value);
        }
    };

    const renderOptions = () => {
        return options.map((option, idx) => {
            const _optionId = `rss-option-${idx}`;

            return (
                <OptionItem
                    key={_optionId}
                    optionsAmount={options.length}
                    className={`${classNamesPrefix}-option`}

                    optionBorderRadius={optionBorderRadius}
                >
                    <OptionItemLabel
                        className={`${classNamesPrefix}-option-label`}
                        selected={selectedIndex === idx}

                        fontSize={fontSize}
                        fontColor={option.fontColor || fontColor}
                        selectedFontColor={option.selectedFontColor || selectedFontColor}
                    >
                        <OptionInput
                            type="radio"
                            id={_optionId}
                            onChange={() => handleOnClick(idx)}
                            checked={selectedIndex === idx}
                        />
                        {option.label}
                    </OptionItemLabel>
                </OptionItem>
            )
        });
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
            selectionIndicatorMargin={selectionIndicatorMargin}
        >
            {renderOptions()}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;