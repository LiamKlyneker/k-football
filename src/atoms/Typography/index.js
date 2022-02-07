import { node, oneOf } from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Typography({ variant = 'p', color, children }) {
  const classNames = cx(styles[variant], styles[color]);
  if (variant === 'h1') {
    return <h1 className={classNames}>{children}</h1>;
  } else if (variant === 'h4') {
    return <h4 className={classNames}>{children}</h4>;
  } else if (variant === 'subtitle') {
    return <p className={classNames}>{children}</p>;
  } else if (variant === 'tag') {
    return <span className={classNames}>{children}</span>;
  } else {
    return <p className={classNames}>{children}</p>;
  }
}

Typography.propTypes = {
  children: node,
  variant: oneOf(['p', 'h1', 'h4', 'subtitle', 'tag']),
  color: oneOf(['white'])
};
