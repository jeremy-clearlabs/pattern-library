import React from 'react';

import { action } from '@storybook/addon-actions';
import Pagination from '.';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    totalRecords: { control: 'number' },
    pageLimit: { control: 'number' },
    offset: { control: 'number' },
    ariaLabel: { control: 'string' },
    pageNeighbours: {
      control: {
        type: 'select',
        options: [0, 1, 2, 3],
      },
    },
  },
};

const PaginationStory = (props) => (
  <Pagination {...props} onPageChanged={action('onPageChanged')} />
);

export const CustomizedPagination = PaginationStory.bind({});

CustomizedPagination.args = {
  totalRecords: 500,
  pageLimit: 30,
  offset: 0,
  pageNeighbours: 1,
  ariaLabel: 'Pagination Example',
};

// export const defaultStory = () => (
//   <Pagination totalRecords={500} onPageChanged={action('onPageChanged')} />
// );

// defaultStory.story = {
//   name: 'default',
// };

// export const customPageLimit = () => (
//   <Pagination
//     totalRecords={500}
//     pageLimit={10}
//     onPageChanged={action('onPageChanged')}
//   />
// );

// customPageLimit.story = {
//   name: 'custom page limit',
// };

// export const noPageNeighbors = () => (
//   <Pagination
//     totalRecords={500}
//     pageNeighbours={0}
//     onPageChanged={action('onPageChanged')}
//   />
// );

// noPageNeighbors.story = {
//   name: 'no page neighbors',
// };

// export const twoPageNeighbors = () => (
//   <Pagination
//     totalRecords={500}
//     pageNeighbours={2}
//     pageLimit={10}
//     onPageChanged={action('onPageChanged')}
//   />
// );

// twoPageNeighbors.story = {
//   name: 'two page neighbors',
// };

// export const ariaLabelStory = () => (
//   <Pagination
//     totalRecords={500}
//     ariaLabel="Sample Page Pagination Example"
//     onPageChanged={action('onPageChanged')}
//   />
// );

// ariaLabelStory.story = {
//   name: 'aria label',
// };
