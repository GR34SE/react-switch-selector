import styled from "@emotion/styled";

interface SwitchSelectorWrapperPropTypes {
    overrideStyles: any;
}

export const SwitchSelectorWrapper = styled('div')<SwitchSelectorWrapperPropTypes>`
  display: flex;
  border-radius: 20px;
  border: 1px solid #eaeaea;
  width: max-content;
  height: max-content;
  ${props => props.overrideStyles};
`;

type OptionItemPropTypes = {
    selected: boolean;
    overrideStyles: any;
}

export const OptionItem = styled('div')<OptionItemPropTypes>`
  display: flex;
  font-size: 14px;
  height: 36px;
  border-radius: 18px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 2px;
  background: ${props => props.selected ? "limegreen" : "transparent"};
  color: ${props => props.selected ? "white" : "black"};
  ${props => props.overrideStyles};
`;
