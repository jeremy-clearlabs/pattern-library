import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: block;
  margin: 0 0.5rem;
  width: min-content;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
const ScreenReaderOnly = styled.span`
  font-size: 0;
`;

const PaginationPageItem = ({
  number,
  previous,
  next,
  between,
  selected,
  ...props
}) => {
  if (next || previous) {
    const label = next ? 'Next' : 'Previous';

    return (
      <Wrapper {...props}>
        <button aria-label={label}>
          {next ? (
            <span aria-hidden="true">&raquo;</span>
          ) : (
            <span aria-hidden="true">&laquo;</span>
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
          <span aria-hidden="true">&hellip;</span>
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

PaginationPageItem.propTypes = {
  previous: PropTypes.bool,
  next: PropTypes.bool,
  between: PropTypes.bool,
  selected: PropTypes.bool,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

PaginationPageItem.defaultProps = {
  number: 0,
};

export default PaginationPageItem;
