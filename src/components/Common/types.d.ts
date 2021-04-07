import React, { ReactChild } from 'react';

export interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactChild;
  index: any;
  value: any;
}

export interface StyledTabsProps {
  value: number;
  variant: 'scrollable' | 'standard' | 'fullWidth' | undefined;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

export interface PropsTab {
  label: string;
  searchUrl?: string;
  component: ReactChild;
}
