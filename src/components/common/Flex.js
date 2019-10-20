import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Flex = ({ justify, align, className, tag: Tag, children, ...rest }) => {
  return (
    <Tag
      className={classNames(
        'd-flex',
        {
          [`justify-content-${justify}`]: justify,
          [`align-items-${align}`]: align
        },
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  className: PropTypes.string,
  tag: PropTypes.string
};

Flex.defaultProps = {
  tag: 'div'
};

export default Flex;
