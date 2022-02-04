import { forwardRef } from 'react';
import { node, oneOf } from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Typography({ variant = 'p', color, children }) {
  const classNames = cx(styles[variant], styles[color]);
  if (variant === 'h1') {
    return (
      <h1 className={classNames} ref={forwardRef}>
        {children}
      </h1>
    );
  } else {
    return <p className={classNames}>{children}</p>;
  }
}

Typography.propTypes = {
  children: node,
  variant: oneOf(['p', 'p-small', 'h1', 'h4', 'h5', 'small', 'caption']),
  color: oneOf(['white'])
};
