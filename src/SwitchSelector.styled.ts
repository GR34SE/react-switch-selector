import styled from "@emotion/styled";

export type StylingPropsTypes = {
    border: string | number;
    backgroundColor: string;
    selectedBackgroundColor: string;
    wrapperBorderRadius: number;
    optionBorderRadius: number;
    fontSize: number;
    fontColor: string;
    selectedFontColor: string;
    selectionIndicatorMargin: number;
}

interface SwitchSelectorWrapperPropTypes extends Pick<StylingPropsTypes,
    'border' |
    'backgroundColor' |
    'selectedBackgroundColor' |
    'wrapperBorderRadius' |
    'optionBorderRadius' |
    'selectionIndicatorMargin'
    > {
    selectedIndex: number;
    optionsAmount: number;
}

export const SwitchSelectorWrapper = styled('div')<SwitchSelectorWrapperPropTypes>`
  display: flex;
  border-radius: ${props => props.wrapperBorderRadius}px;
  border: ${props => props.border};
  background: ${props => props.backgroundColor};
  width: 100%;
  height: 100%;
  position: relative;

  ::before{
    top: 50%;
    left: ${props => (props.selectedIndex / props.optionsAmount) * 100}%;
    content: '';
    position: absolute;
    height: calc(100% - ${props => 2 * props.selectionIndicatorMargin}px);
    width: calc(${props => (1 / props.optionsAmount) * 100}% - ${props => 2 * props.selectionIndicatorMargin}px);
    border-radius: ${props => props.optionBorderRadius}px;
    border: ${props => props.selectionIndicatorMargin}px solid ${props => props.backgroundColor};
    background: ${props => props.selectedBackgroundColor};
    transition: left 0.1s linear, background 0.1s linear;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

interface OptionItemPropsTypes extends Pick<StylingPropsTypes, 'optionBorderRadius'>{
    optionsAmount: number;
}

export const OptionItem = styled('div')<OptionItemPropsTypes>`
  display: flex;
  align-items: center;
  height: 100%;
  width: ${props => (1 / props.optionsAmount) * 100}%;
  border-radius: ${props => props.optionBorderRadius}px;
  
  input {
    width: 0;
    height: 0;
    opacity: 0;
    z-index: -1;
    position: absolute;
    pointer-events: none;
  }
`;

interface OptionItemLabelPropsTypes extends Pick<StylingPropsTypes, 'fontSize' | 'fontColor' | 'selectedFontColor'>{
    selected: boolean;
}

export const OptionItemLabel = styled('label')<OptionItemLabelPropsTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.fontSize}px;
  width: 100%;
  height: 100%;
  color: ${props => props.selected ? props.selectedFontColor : props.fontColor};
  z-index: 2;
  transition: color 0.1s linear;
  cursor: pointer;
`;
