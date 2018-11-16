import React, { Component } from 'react';

export const GridFilter = props => (
  <div>
    {props.config.filter ?
      (<input type='text' value={props.value} onChange={e => {props.handleOnChange(e.target.value, props.config.key)}} />) :
      ''
    }
  </div>
);

export const Grid = props => (
  <table className='table table-striped table-hover table-bordered'>
    <thead>
      <tr>
        {props.columns.map((column, i) => {
          return typeof column.visible === 'undefined' || column.visible === true ? (<td key={i}>{column.label}</td>) : null;
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
