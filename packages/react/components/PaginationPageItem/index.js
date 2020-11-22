import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SafeAnchor from '../SafeAnchor';

const Wrapper = styled.li`
  display: block;
  height: 3.5rem;
  margin-left: 0.9rem;
  margin-right: 0.9rem;
  width: min-content;
  min-width: 3.5rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
const IconText = styled.span``;
const ScreenReaderOnly = styled.span`
  font-size: 0;
`;

const PageItem = ({ number, previous, next, between, selected, ...props }) => {
  if (next || previous) {
    const label = next ? 'Next' : 'Previous';

    return (
      <Wrapper {...props}>
        <button aria-label={label}>
          {next ? (
            <IconText aria-hidden="true">&raquo;</IconText>
          ) : (
            <IconText aria-hidden="true">&laquo;</IconText>
          )}
          <ScreenReaderOnly>{label}</ScreenReaderOnly>
        </button>
      </Wrapper>
    );
  }

  if (between) {
    return (
      <Wrapper {...props}>
        <button disabled>
          <IconText aria-hidden="true">&hellip;</IconText>
        </button>
      </Wrapper>
    );
  }

  const selectedStyles = {
    fontWeight: 'bold',
  };

  return (
    <Wrapper {...props}>
      <button
        style={selected ? selectedStyles : {}}
        aria-label={`Go to page ${number}`}
      >
        {number}
      </button>
    </Wrapper>
  );
};

PageItem.propTypes = {
  previous: PropTypes.bool,
  next: PropTypes.bool,
  between: PropTypes.bool,
  selected: PropTypes.bool,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

PageItem.defaultProps = {
  number: 0,
};

export default PageItem;
