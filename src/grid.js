import React, { Component } from 'react';
import { GridFilter } from './filter';
import { GridSort } from './sort';

export const HeaderCell = props => {
  const column = props.column;
  const visible = typeof column.visible === 'undefined' || column.visible === true;
  const hasSort = typeof column.sortable === 'undefined' || column.sortable === true;
  const headTitle = <span>{column.label}</span>;
  const sort = hasSort ? <GridSort direction={column.sortDirection} /> : null;
  return ({ visible ? (
      <div>
        {headTitle}
        {sort}
      </div> :
      null
    )
  })
}

export const Grid = props => (
  <table className='table table-striped table-hover table-bordered'>
    <thead>
      <tr>
        {props.columns.map((column, i) => {
          return typeof column.visible === 'undefined' || column.visible === true ? (
            <td key={i}>
              <span>{column.label}</span>

            </td>
          ) : null;
        })}
      </tr>
      <tr>
        {props.columns.map((column, i) => {
          return typeof column.visible === 'undefined' || column.visible === true ? (<td key={i}><GridFilter config={column} handleOnChange={props.onFilterChange} /></td>) : null;
        })}
      </tr>
    </thead>
    <tbody>
      {props.data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {props.columns.map((column, i) => {
            return typeof column.visible === 'undefined' || column.visible === true ? (<td key={i}>{column.value ? column.value(row, column, rowIndex) : row[column.key]}</td>) : null;
          })}
        </tr>
      ))}
    </tbody>
  </table>
);
