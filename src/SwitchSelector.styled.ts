import styled from "@emotion/styled";

interface SwitchSelectorWrapperPropTypes {
    selectedIndex: number;
    optionsAmount: number;
    selectedOptionStyles: any;
    overrideStyles: any;
}

export const SwitchSelectorWrapper = styled('div')<SwitchSelectorWrapperPropTypes>`
  display: flex;
  border-radius: 20px;
  border: 1px solid #eaeaea;
  width: 100%;
  height: max-content;
  position: relative;
  
  ::before{
    left: ${props => (props.selectedIndex / props.optionsAmount) * 100}%;
    content: '';
    position: absolute;
    height: 36px;
    width: ${props => (1 / props.optionsAmount) * 100}%;
    border-radius: 18px;
    margin: 2px;
    background: limegreen;
    color: white;
    transition: left 0.1s linear;
    z-index: 1;
    ${props => props.selectedOptionStyles};
  }
  ${props => props.overrideStyles};
`;

type OptionItemPropTypes = {
    optionsAmount: number;
    selected: boolean;
    overrideStyles: any;
}

export const OptionItem = styled('div')<OptionItemPropTypes>`
  display: flex;
  font-size: 14px;
  height: 36px;
  width: ${props => (1 / props.optionsAmount) * 100}%;
  border-radius: 18px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 2px;
  align-items: center;
  
  span {
    text-align: center;
    width: 100%;
    color: ${props => props.selected ? "white" : "black"};
    z-index: 2;
    transition: color 0.1s linear;
  }
  
  ${props => props.overrideStyles};
`;
