import {
    Card as MUICard,
    CardProps
} from "@mui/material";


export interface CustomCardProps extends CardProps {
    children: React.ReactNode;
}

const Card = ({ children, ...rest }: CustomCardProps) => (
    <MUICard {...rest}>{children}</MUICard>
);

Card.defaultProps = {

};

export default Card;
