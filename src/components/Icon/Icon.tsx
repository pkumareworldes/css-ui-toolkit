import MuiIcon from '@mui/material/Icon';
import {IconWrapperProps} from './IIcon';
const Icon = ({iconName, ...rest}: IconWrapperProps) => {
    return (
        <MuiIcon {...rest}>{iconName}</MuiIcon>
    )
}

export default Icon;