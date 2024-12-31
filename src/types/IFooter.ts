export interface FooterProps {
  footerTheme?: any;
  footerLeftPanel?: React.ReactNode;
  footerRightPanel?: React.ReactNode;
  footerBottomPanel?: [{
    label: string;
    value: string;
    isLink?: boolean;
  }]
}
