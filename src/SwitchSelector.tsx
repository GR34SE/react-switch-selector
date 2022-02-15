import React from "react";
import {useEffect} from "react";
import {
    SwitchSelectorWrapper,
    OptionItem,
    OptionItemLabel,
    OptionInput
} from "./SwitchSelector.styled";
import {SwitchSelectorProps} from "./SwitchSelector.props";
import {defaultColors} from "./defaultColors";

const CLASS_NAMES_PREFIX = "react-switch-selector";

const SwitchSelector: React.FC<SwitchSelectorProps> = (props) => {
    const {onChange = (): void => {}, options = [], initialSelectedIndex = 0} = props;
    const canApplyInitialSelectedIndex = !!options[initialSelectedIndex];
    const [selectedIndex, setSelectedIndex] = React.useState(
        canApplyInitialSelectedIndex ? initialSelectedIndex : 0
    );

    const _componentId = (Math.floor(Math.random() * (10000 - 1 + 1)) + 1).toString();
    const _groupName = `rss-${_componentId}`

    const {
        border = 0,
        backgroundColor = defaultColors.backgroundColor,
        selectedBackgroundColor = defaultColors.selectedBackgroundColor,
        wrapperBorderRadius = 20,
        optionBorderRadius = 18,
        fontSize = 14,
        fontColor = defaultColors.fontColor,
        selectedFontColor = defaultColors.selectedFontColor,
        selectionIndicatorMargin = 2,
        forcedSelectedIndex,
        disabled = false
    } = props;

    useEffect(() => {
        if (
            forcedSelectedIndex !== undefined &&
            !!options[forcedSelectedIndex] &&
            forcedSelectedIndex !== selectedIndex
        ) {
            setSelectedIndex(forcedSelectedIndex);
        }
    }, [forcedSelectedIndex, options, selectedIndex]);

    const handleOnClick = (index: number): void => {
        if (!disabled && index !== selectedIndex) {
            setSelectedIndex(index);
            onChange(options[index].value);
        }
    };

    const renderOptions = (): React.ReactElement[] => {
        return options.map((option, index) => {
            const _optionId = `rss-option-${index}`;
            const isRawText = typeof option.label === "string";

            const labelRawTextProps = {
                fontSize,
                fontColor: option.fontColor || fontColor,
                selectedFontColor: option.selectedFontColor || selectedFontColor
            };

            return (
                <OptionItem
                    key={_optionId}
                    optionsAmount={options.length}
                    className={`${CLASS_NAMES_PREFIX}-option`}
                    optionBorderRadius={optionBorderRadius}
                >
                    <OptionItemLabel
                        className={`${CLASS_NAMES_PREFIX}-option-label`}
                        selected={selectedIndex === index}
                        isRawText={isRawText}
                        disabled={disabled}
                        aria-disabled={disabled}
                        htmlFor={_optionId}
                        {...(isRawText ? labelRawTextProps : {})}
                    >
                        <OptionInput
                            type="radio"
                            name={_groupName}
                            id={_optionId}
                            onChange={(): void => handleOnClick(index)}
                            checked={selectedIndex === index}
                        />
                        {option.label}
                    </OptionItemLabel>
                </OptionItem>
            );
        });
    };

    if (!options.length) return null;
    return (
        <SwitchSelectorWrapper
            role="radiogroup"
            selectedIndex={selectedIndex}
            optionsAmount={options.length}
            className={`${CLASS_NAMES_PREFIX}-wrapper ${
                disabled ? `${CLASS_NAMES_PREFIX}-disabled` : ""
            }`}
            border={border}
            backgroundColor={backgroundColor}
            selectedBackgroundColor={
                options[selectedIndex]?.selectedBackgroundColor || selectedBackgroundColor
            }
            wrapperBorderRadius={wrapperBorderRadius}
            optionBorderRadius={optionBorderRadius}
            selectionIndicatorMargin={selectionIndicatorMargin}
            disabled={disabled}
        >
            {renderOptions()}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;
