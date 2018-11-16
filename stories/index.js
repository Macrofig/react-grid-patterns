import React from 'react';
import { storiesOf } from '@storybook/react';
import { Page } from '../src/page';

const columns = [
  {
    label: '#',
    value: (row, column, i) => i + 1,
    visible: true
  },
  {
    label: 'Select',
    key: '_selected',
    value: () => {
      return (<div><input type="checkbox" /></div>)
    },
    visibility: {
      frozen: true
    }
  },
  {
    label: 'City',
    key: 'city',
    visible: true,
    filter: true
  },
  {
    label: 'State',
    key: 'state',
    visible: true,
    filter: true
  },
  {
    label: 'Country',
    key: 'country',
    visible: true,
    filter: true
  },
  {
    label: 'Lived or Visited',
    key: '_live_visited',
    value: row => {
      return (<span>{row.visited ? 'Visited': 'Lived'}</span>)
    },
    visible: true
  },
  {
    label: 'Actions',
    value: () => {
      return (<div><button type="button">Delete</button></div>)
    },
    visibility: {
      frozen: true
    }
  }
];


const data = [
  {
    city: 'Ventura',
    state: 'California',
    country: 'USA',
    lived: true
  },
  {
    city: 'Schopp',
    state: 'Rheinland Pfalz',
    country: 'Germany',
    lived: true
  },
  {
    city: 'Raleigh',
    state: 'North Carolina',
    country: 'USA',
    lived: true
  },
  {
    city: 'Charlotte',
    state: 'North Carolina',
    country: 'USA',
    visited: true
  },
  {
    city: 'San Francisco',
    state: 'California',
    country: 'USA',
    visited: true
  },
  {
    city: 'Phoenix',
    state: 'Arizona',
    country: 'USA',
    visited: true
  },
  {
    city: 'Denver',
    state: 'Colorado',
    country: 'USA',
    visited: true
  },
  {
    city: 'Austin',
    state: 'Texas',
    country: 'USA',
    visited: true
  },
  {
    city: 'Munchin',
    state: 'Bavaria',
    country: 'Germany',
    visited: true
  }
];

storiesOf('Page', module)
  .add('Basic', () => (
    <div>
      <Page columns={columns} data={data} />
    </div>
  ));
