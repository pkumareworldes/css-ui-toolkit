import { ReactNode } from 'react';

export interface InputFieldWrapperProps {
  label: string;
  required?: boolean;
  info?: string;
  children: ReactNode;
}
