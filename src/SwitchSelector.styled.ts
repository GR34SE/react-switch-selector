import styled from "@emotion/styled";

interface SwitchSelectorWrapperPropTypes {
    selectedIndex: number;
    optionsAmount: number;
    border: string | number;
    backgroundColor?: string;
    selectedBackgroundColor?: string;
    wrapperBorderRadius: number;
    optionBorderRadius: number;
}

export const SwitchSelectorWrapper = styled('div')<SwitchSelectorWrapperPropTypes>`
  display: flex;
  border-radius: ${props => props.wrapperBorderRadius}px;
  border: ${props => props.border};
  background: ${props => props.backgroundColor || "white"};
  width: 100%;
  height: 100%;
  position: relative;

  ::before{
    top: 50%;
    left: ${props => (props.selectedIndex / props.optionsAmount) * 100}%;
    content: '';
    position: absolute;
    height: 100%;
    width: ${props => (1 / props.optionsAmount) * 100}%;
    border-radius: ${props => props.optionBorderRadius}px;
    border: 2px solid ${props => props.backgroundColor || "white"};
    background: ${props => props.selectedBackgroundColor || "limegreen"};
    transition: left 0.1s linear;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

type OptionItemPropsTypes = {
    optionsAmount: number;
    optionBorderRadius: number;
}

export const OptionItem = styled('div')<OptionItemPropsTypes>`
  display: flex;
  align-items: center;
  height: 100%;
  width: ${props => (1 / props.optionsAmount) * 100}%;
  border-radius: ${props => props.optionBorderRadius}px;
  cursor: pointer;
`;

type OptionItemLabelPropsTypes = {
    selected: boolean;
    fontSize: number;
    fontColor?: string;
    selectedFontColor?: string;
}

export const OptionItemLabel = styled('span')<OptionItemLabelPropsTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.fontSize}px;
  width: 100%;
  color: ${props => props.selected ? (props.selectedFontColor || "white") : (props.fontColor || "black")};
  z-index: 2;
  transition: color 0.1s linear;
`;
