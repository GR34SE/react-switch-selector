import * as React from "react";
import {useEffect} from "react";
import {
    SwitchSelectorWrapper,
    OptionItem,
    OptionItemLabel,
    OptionInput
} from "./SwitchSelector.styled";
import {StylingPropsTypes} from "./SwitchSelector.styled";
import {defaultColors} from "./defaultColors";

export type OptionType = {
    label: string | number | React.ReactElement | HTMLElement;
    value: unknown;
    selectedBackgroundColor?: string;
    fontColor?: string;
    selectedFontColor?: string;
};

export interface Props extends Partial<StylingPropsTypes> {
    onChange: <T extends any>(val: T) => void;
    options: Array<OptionType>;
    initialSelectedIndex?: number;
    forcedSelectedIndex?: number;
}

const classNamesPrefix = "react-switch-selector";

const SwitchSelector: React.FC<Props> = (props) => {
    const {
        onChange = (value): void => console.log(value),
        options = [],
        initialSelectedIndex = 0
    } = props;
    const canApplyInitialSelectedIndex = !!options[initialSelectedIndex];
    const [selectedIndex, setSelectedIndex] = React.useState(
        canApplyInitialSelectedIndex ? initialSelectedIndex : 0
    );

    if (!canApplyInitialSelectedIndex) {
        console.warn(
            "[react-switch-selector]: Passed initialSelectedIndex prop doesn't match item from your options array"
        );
    }

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
        forcedSelectedIndex
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

    const handleOnClick = (idx: number): void => {
        if (idx !== selectedIndex) {
            setSelectedIndex(idx);
            onChange(options[idx].value);
        }
    };

    const renderOptions = (): React.ReactElement[] => {
        return options.map((option, idx) => {
            const _optionId = `rss-option-${idx}`;
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
                    className={`${classNamesPrefix}-option`}
                    optionBorderRadius={optionBorderRadius}
                >
                    <OptionItemLabel
                        className={`${classNamesPrefix}-option-label`}
                        selected={selectedIndex === idx}
                        isRawText={isRawText}
                        {...(isRawText ? labelRawTextProps : {})}
                    >
                        <OptionInput
                            type="radio"
                            id={_optionId}
                            onChange={(): void => handleOnClick(idx)}
                            checked={selectedIndex === idx}
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
            selectedIndex={selectedIndex}
            optionsAmount={options.length}
            className={`${classNamesPrefix}-wrapper`}
            border={border}
            backgroundColor={backgroundColor}
            selectedBackgroundColor={
                options[selectedIndex]?.selectedBackgroundColor || selectedBackgroundColor
            }
            wrapperBorderRadius={wrapperBorderRadius}
            optionBorderRadius={optionBorderRadius}
            selectionIndicatorMargin={selectionIndicatorMargin}
        >
            {renderOptions()}
        </SwitchSelectorWrapper>
    );
};

export default SwitchSelector;
