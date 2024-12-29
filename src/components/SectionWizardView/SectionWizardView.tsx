import { Card, Divider, Grid2 as Grid } from "@mui/material"
import { MUIChip } from "../Chip";
import { MUIROF } from "../ReadonlyField";
import { ISectionWizardViewProps, ISubsection } from "./types";
import { ChipContainerStyle, ChipTitleStyle } from "./styles";
import * as Styled from './styles'

const WizardSubsection = ({ options }: { options: ISubsection }) => {

    const { statusSection, section, footer: Footer, isFullScreen } = options
    const responsiveColumn = isFullScreen ? { xs: 6, sm: 6, md: 12, lg: 12, xl: 12 } : 12

    return <Styled.WizardSubsectionContainer>
        <div>
            <Grid
                container
                direction="row"
                justifySelf={'baseline'}
                alignContent={'center'}
            >
                <ChipTitleStyle>{statusSection?.title}</ChipTitleStyle>
                {
                    statusSection?.options.map(data => <ChipContainerStyle>
                        <MUIChip eleProps={data} />
                    </ChipContainerStyle>)
                }
            </Grid>
        </div>
        <Grid container spacing={1} padding={2} paddingLeft={0} columns={responsiveColumn}>
            {
                section?.map(field => {
                    return (<Grid size={isFullScreen ? { xs: 3, sm: 3, md: 4, lg: 3, xl: 3 } : 6}>
                        <MUIROF eleProps={field.options} />
                    </Grid>)
                })
            }
        </Grid>
        {
            Footer && <Footer />
        }
        <Divider className="wizard-subsection-container-divider" />
    </Styled.WizardSubsectionContainer>
}

const SectionWizardView = ({ header, subsections }: ISectionWizardViewProps) => {
    return <Card >
        <Styled.SectionWizardViewContainer>
            <h2>
                {header?.title}
            </h2>
            <div className="section-container">
                {
                    subsections?.map(sectionData => <WizardSubsection options={sectionData} />)
                }
            </div>

        </Styled.SectionWizardViewContainer>
    </Card>
}

SectionWizardView.defaultProps = {
    isFullScreen: true
};

export default SectionWizardView;


