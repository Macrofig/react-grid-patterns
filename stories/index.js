import React from 'react';
import { storiesOf } from '@storybook/react';
import { Page } from '../src/grid';

storiesOf('Page', module)
  .add('Basic', () => (
    <div>
      <Page />
    </div>
  ));
