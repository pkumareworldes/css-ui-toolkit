import styled from "styled-components";


const SectionWizardViewContainer = styled.div`
    padding:1rem; 
`

const WizardSubsectionContainer = styled.div`
   margin-bottom: 2rem;
   &:last-child {
      .wizard-subsection-container-divider {
          display: none;
      }
    }

   &:last-child {
        margin-bottom: 0;
   }
`
const ChipTitleStyle = styled.span`
  margin-right:0.9rem;
  font-weight:600
`;
const ChipContainerStyle = styled.span`
  margin-right:0.9rem;
`;



export {
  ChipTitleStyle,
  ChipContainerStyle,
  WizardSubsectionContainer,
  SectionWizardViewContainer
}