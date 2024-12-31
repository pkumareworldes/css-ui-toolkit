import { ChipInterface } from "../Chip/chipInterface"
import { ROFInterface } from "../ReadonlyField/rofInterface"

interface IFields {
    options: ROFInterface
}

interface IStatusSection {
    title: string
    options: ChipInterface[]
}

export interface ISubsection {
    statusSection?: IStatusSection
    section?: IFields[]
    isFullScreen?: boolean
    footer?: React.ComponentType
}

export interface ISectionWizardViewProps {
    header?: {
        title: string
    }
    subsections?: ISubsection[]
}