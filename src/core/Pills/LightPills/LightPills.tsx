import React from 'react';
import { useStyles } from './style';
import { PillsBaseProps } from '../base';

type Variant = 'success' | 'warning' | 'danger' | undefined;

interface LightPillsProps extends PillsBaseProps {
  variant?: Variant;
}
const LightPills: React.FC<LightPillsProps> = ({ children, variant }) => {
  const classes = useStyles();
  const getVariant = (variant: Variant) => {
    switch (variant) {
      case 'success':
        return classes.success;
      case 'warning':
        return classes.warning;
      case 'danger':
        return classes.danger;
      default:
        return '';
    }
  };
  return (
    <div className={`${classes.root} ${getVariant(variant)}`}>{children}</div>
  );
};
export { LightPills };
