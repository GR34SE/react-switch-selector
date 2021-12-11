import React from "react";
import {StylingPropsTypes} from "./SwitchSelector.styled";

export type OptionType<T = unknown> = {
    label: string | number | React.ReactElement | HTMLElement;
    value: T;
    selectedBackgroundColor?: string;
    fontColor?: string;
    selectedFontColor?: string;
};

export interface SwitchSelectorProps extends Partial<StylingPropsTypes> {
    options: Array<OptionType>;
    onChange?: <T>(selectedOptionValue: T | unknown) => void;
    initialSelectedIndex?: number;
    forcedSelectedIndex?: number;
    disabled?: boolean;
}
