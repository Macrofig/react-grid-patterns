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

export class ColumnList {
  constructor(list) {
    this._list = list;
    this.list = this._list.map(item => new ColumnItem(item, this))
  }
}

export class ColumnItem {
  constructor(item, parent) {
    this._item = item;
    this._parent = parent;
  }
}


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
