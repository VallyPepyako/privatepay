import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';
import button from '../src/components/button.scss';
import index from '../src/index.scss';

storiesOf('Button', module)
  .add('with text', () => (
    <Button className="button button--confirm" text="Подтвердить"/>
  ))
  