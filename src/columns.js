import React, { Component } from 'react';
/*

COLUMN
label: string|function
key: string|function
value: function
visible: boolean
sorting: string
filtering: string
selected: boolean
sort: SORT
filter: FILTER
selection: SELECTION
visiblity: VISIBILITY

SORT
default: string
allowed: boolean

FILTER
allowed: boolean
key: string|function

SELECTION
allowed: boolean

VISIBILITY
frozen: boolean

*/

export const Columns = () => {}


export const ColumnList = props => (
  <ul>
    {props.columns.filter(column => {
      return !(column.visibility && column.visibility.frozen)
    }).map((column, i) => (
      <li key={i}>
        <input type='checkbox' checked={column.visible} onChange={(e) => {props.handleChange(column)}}/>
        <label>{column.label}</label>
      </li>
    ))}
  </ul>
);
