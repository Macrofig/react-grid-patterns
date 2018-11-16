import React, { Component } from 'react';
import { Grid } from './grid';
import { ColumnList } from './columns';

export class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      columns: this.props.columns
    };

    this.columnToggle = this.columnToggle.bind(this);
    this.filterChange = this.filterChange.bind(this);
  }

  columnToggle(column) {
    const columns = this.state.columns;
    column.visible = !column.visible;
    this.setState({ columns })
  }

  filterChange(value, key) {
    this.setState({
      data: this.props.data.filter(item => item[key].toLowerCase().trim().indexOf(value.toLowerCase().trim()) > -1)
    });
  }

  render () {
    const columns = this.state.columns;
    const data = this.state.data;
    return (
      <div className='container'>
        <ColumnList columns={columns} handleChange={this.columnToggle} />
        <Grid data={data} columns={columns} onFilterChange={this.filterChange}/>
      </div>
    );
  }
}
