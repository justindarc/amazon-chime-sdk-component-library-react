import styled from "styled-components";

import { visuallyHidden, absoluteCenter } from '../../utils/style';

export const HiddenRadio = styled.input`
  ${visuallyHidden};

  &[aria-invalid="true"] + .Radio {
    border: ${props => props.theme.inputs.error.border};
    box-shadow: ${props => props.theme.inputs.error.shadow};
  }
`;

export const StyledRadioWrapper = styled.span`
  > label {
    margin-left: 0.5rem;
  }
`;

export const StyledRadio = styled.div<any>`
  background-color: ${props => props.theme.inputs.bgd};
  border: ${props => props.theme.inputs.border};
  border-radius: ${props => props.theme.radii.circle};
  box-shadow: ${props => props.theme.inputs.shadow};
  display: inline-block;
  height: 1rem;
  margin-bottom: -0.1875rem;
  position: relative;
  width: 1rem;
  transition: box-shadow .05s ease-in;

  &:after {
    background-color: ${props =>
      props.checked ?
      props.theme.inputs.checked.fontColor :
      props.theme.inputs.bgd
    };
    border-radius: ${props => props.theme.radii.circle};
    content: '';
    display: block;
    height: 0.375rem;
    padding: 0.03125rem;
    width: 0.375rem;
    ${absoluteCenter};
  }

  ${HiddenRadio}:checked ~ & {
    background-color: ${props => props.theme.inputs.checked.bgd};
    border: ${props => props.theme.inputs.checked.border};
    box-shadow: ${props => props.theme.inputs.checked.shadow};
  }

  ${HiddenRadio}:focus ~ & {
    border: ${props => props.theme.inputs.focus.border};
    box-shadow: ${props => props.theme.inputs.focus.shadow};
  }
`;