interface Breadcrumb {
  linkText: string;
  link?: string;
}

export interface PageHeaderProps {
  title: string;
  secondaryTitle?: string;
  infoText?: string;
  infoSecondaryText?: string;
  chipStyles?: any;
  breadcrumbs?: Breadcrumb[];
  breadcrumbsHandler?: () => void;
}
