import React, {FC, useState, useEffect, useCallback, useMemo} from "react";
import {
    SwitchSelectorWrapper,
    OptionItem,
    OptionItemLabel,
    OptionInput
} from "./SwitchSelector.styled";
import {SwitchSelectorProps} from "./SwitchSelector.props";
import {defaultColors} from "./defaultColors";

const CLASS_NAMES_PREFIX = "react-switch-selector";

const SwitchSelector: FC<SwitchSelectorProps> = (props) => {
    const {onChange = (): void => {}, options = [], initialSelectedIndex = 0} = props;
    const canApplyInitialSelectedIndex = !!options[initialSelectedIndex];
    const [selectedIndex, setSelectedIndex] = useState(
        canApplyInitialSelectedIndex ? initialSelectedIndex : 0
    );

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
        disabled = false,
        name
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

    const handleOnClick = useCallback(
        (index: number): void => {
            if (!disabled && index !== selectedIndex) {
                setSelectedIndex(index);
                onChange(options[index].value);
            }
        },
        [disabled, onChange, options, selectedIndex]
    );

    const renderedOptions = useMemo(() => {
        return options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const optionId = `${name ?? "rss"}-option-${index}`;
            const isRawText = typeof option.label === "string";

            const labelRawTextProps = {
                fontSize,
                fontColor: option.fontColor || fontColor,
                selectedFontColor: option.selectedFontColor || selectedFontColor
            };

            return (
                <OptionItem
                    key={optionId}
                    optionsAmount={options.length}
                    className={`${CLASS_NAMES_PREFIX}-option ${CLASS_NAMES_PREFIX}-option-${
                        isSelected ? "selected" : "unselected"
                    }`}
                    optionBorderRadius={optionBorderRadius}
                >
                    <OptionItemLabel
                        className={`${CLASS_NAMES_PREFIX}-option-label`}
                        selected={isSelected}
                        isRawText={isRawText}
                        disabled={disabled}
                        aria-disabled={disabled}
                        htmlFor={optionId}
                        {...(isRawText ? labelRawTextProps : {})}
                    >
                        <OptionInput
                            type="radio"
                            id={optionId}
                            name={name}
                            onChange={(): void => handleOnClick(index)}
                            checked={isSelected}
                            aria-checked={isSelected}
                            tabIndex={isSelected ? 0 : -1}
                        />
                        {option.label}
                    </OptionItemLabel>
                </OptionItem>
            );
        });
    }, [
        disabled,
        fontColor,
        fontSize,
        handleOnClick,
        name,
        optionBorderRadius,
        options,
        selectedFontColor,
        selectedIndex
    ]);

    if (!options.length) return null;
    return (
        <SwitchSelectorWrapper
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
            role={"radiogroup"}
            aria-labelledby={name}
        >
            {renderedOptions}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;
