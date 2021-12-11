import React from "react";
import {StylingPropsTypes} from "./SwitchSelector.styled";

export type OptionType = {
    label: string | number | React.ReactElement | HTMLElement;
    value: unknown;
    selectedBackgroundColor?: string;
    fontColor?: string;
    selectedFontColor?: string;
};

export interface SwitchSelectorProps extends Partial<StylingPropsTypes> {
    options: Array<OptionType>;
    onChange?: <T extends any>(val: T) => void;
    initialSelectedIndex?: number;
    forcedSelectedIndex?: number;
    disabled?: boolean;
}
