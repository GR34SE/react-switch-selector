import {createElement} from "react";
import {setup, styled} from "goober";
import {shouldForwardProp} from "goober/should-forward-prop";
import type CSS from "csstype";

const propToOmitInDom = [
    "fontSize",
    "fontColor",
    "selectedFontColor",
    "optionsAmount",
    "optionBorderRadius",
    "isRawText",
    "selectedIndex",
    "border",
    "backgroundColor",
    "selectedBackgroundColor",
    "wrapperBorderRadius",
    "selectionIndicatorMargin",
    "disabled"
];

setup(
    createElement,
    undefined,
    undefined,
    shouldForwardProp((prop) => !propToOmitInDom.includes(prop))
);

export type StylingPropsTypes = {
    border: string | number;
    backgroundColor: string;
    selectedBackgroundColor: string;
    wrapperBorderRadius: number | CSS.Property.BorderRadius<string>;
    optionBorderRadius: number | CSS.Property.BorderRadius<string>;
    fontSize: number;
    fontColor: string;
    selectedFontColor: string;
    selectionIndicatorMargin: number;
};

interface SwitchSelectorWrapperPropTypes extends Pick<
    StylingPropsTypes,
    | "border"
    | "backgroundColor"
    | "selectedBackgroundColor"
    | "wrapperBorderRadius"
    | "optionBorderRadius"
    | "selectionIndicatorMargin"
> {
    selectedIndex: number;
    optionsAmount: number;
    disabled: boolean;
}

export const SwitchSelectorWrapper = styled("div")<SwitchSelectorWrapperPropTypes>`
    display: flex;
    border-radius: ${({wrapperBorderRadius}) =>
        typeof wrapperBorderRadius === "number" ? `${wrapperBorderRadius}px` : wrapperBorderRadius};
    border: ${(props) => props.border};
    background: ${(props) => props.backgroundColor};
    width: 100%;
    height: 100%;
    position: relative;
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    overflow: hidden;

    &::before {
        top: 50%;
        left: ${(props) => (props.selectedIndex / props.optionsAmount) * 100}%;
        content: "";
        position: absolute;
        height: calc(100% - ${(props) => 2 * props.selectionIndicatorMargin}px);
        width: calc(
            ${(props) => (1 / props.optionsAmount) * 100}%${" - "}${(props) =>
                    2 * props.selectionIndicatorMargin}px
        );
        border-radius: ${({optionBorderRadius}) =>
            typeof optionBorderRadius === "number"
                ? `${optionBorderRadius}px`
                : optionBorderRadius};
        border: ${(props) => props.selectionIndicatorMargin}px
            ${"solid "}${(props) => props.backgroundColor};
        background: ${(props) => props.selectedBackgroundColor};
        transition:
            left 0.1s linear,
            background 0.1s linear;
        transform: translateY(-50%);
        z-index: 1;
        box-sizing: content-box;
    }
`;

interface OptionItemPropsTypes extends Pick<StylingPropsTypes, "optionBorderRadius"> {
    optionsAmount: number;
}

export const OptionItem = styled("div")<OptionItemPropsTypes>`
    display: flex;
    align-items: center;
    height: 100%;
    width: ${(props: OptionItemPropsTypes) => (1 / props.optionsAmount) * 100}%;
    border-radius: ${({optionBorderRadius}) =>
        typeof optionBorderRadius === "number" ? `${optionBorderRadius}px` : optionBorderRadius};
`;

interface OptionItemLabelPropsTypes extends Partial<
    Pick<StylingPropsTypes, "fontSize" | "fontColor" | "selectedFontColor">
> {
    isRawText: boolean;
    selected: boolean;
    disabled: boolean;
}

export const OptionItemLabel = styled("label")<OptionItemLabelPropsTypes>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: color 0.1s linear;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    font-size: ${(props) => (props.isRawText ? props.fontSize + "px" : "unset")};
    color: ${(props) =>
        props.isRawText ? (props.selected ? props.selectedFontColor : props.fontColor) : "unset"};
`;

export const OptionInput = styled("input")`
    width: 0;
    height: 0;
    opacity: 0;
    z-index: -1;
    position: absolute;
    pointer-events: none;
`;
