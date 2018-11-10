import React, { Component } from 'react';

const ColumnList = props => (
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

const Grid = props => (
  <table>
    <thead>
      <tr>
        {props.columns.map((column, i) => {
          return typeof column.visible === 'undefined' || column.visible === true ? (<td key={i}>{column.label}</td>) : null;
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

export class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          city: 'Ventura',
          state: 'California',
          country: 'USA'
        },
        {
          city: 'Schopp',
          state: 'Rheinland Pfalz',
          country: 'Germany'
        },
        {
          city: 'Raleigh',
          state: 'North Carolina',
          country: 'USA'
        }
      ],
      columns: [
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
          visible: true
        },
        {
          label: 'State',
          key: 'state',
          visible: true
        },
        {
          label: 'Country',
          key: 'country',
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
      ]
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(column) {
    console.log(arguments)
    const columns = this.state.columns;
    column.visible = !column.visible;
    this.setState({ columns })
  }

  render () {
    const columns = this.state.columns;
    const data = this.state.data;
    return (
      <div>
        <ColumnList columns={columns} handleChange={this.handleOnChange} />
        <Grid data={data} columns={columns} />
      </div>
    );
  }
}
