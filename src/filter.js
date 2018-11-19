import React, { Component } from 'react';

export const GridFilter = props => (
  <div>
    {props.config.filter ?
      (<input type='text' value={props.value} onChange={e => {props.handleOnChange(e.target.value, props.config.key)}} />) :
      ''
    }
  </div>
);
