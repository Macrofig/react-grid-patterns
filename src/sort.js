import React, { Component } from 'react';

export const DIRECTIONS = {
  asc: 'Ascending',
  desc: 'Descending'
};

export const GridSort = props => {
  const direction = props.direction && DIRECTIONS[props.direction] ? DIRECTIONS[props.direction]: DIRECTIONS.asc;

  return (
    <div className='grid-sort'>
      <span className={`grid-sort_${props.direction}`}></span>
      <span className='sr-only'>{direction}</span>
    </div>
  )
}
