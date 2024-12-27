import { SxProps } from '@mui/material';

export interface StatisticsCardProps {
    title: string;
    hint?: string;
    number: number;
    percentage: number;
    color: string;
    sxStyles?: SxProps;
  }
  