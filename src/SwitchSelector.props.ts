import type {ReactNode} from "react";
import type {StylingPropsTypes} from "./SwitchSelector.styled";

export type OptionType<T = unknown> = {
    label: ReactNode;
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
    name?: string;
}
