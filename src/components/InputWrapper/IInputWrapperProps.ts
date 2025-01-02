import { ReactNode } from 'react';

export interface InputFieldWrapperProps {
  label: string;
  required?: boolean;
  info?: string;
  placeholder?: string;
  error?: boolean;  
  helperText?: string; 
  children: ReactNode;
}