import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';
import '../src/index.scss';

storiesOf('Buttons', module)
  .add('pure button', () => (
    <Button title="Подтвердить"/>
  ))
  .add('login button', () => (
    <Button modifiers={["login"]} title="Подтвердить"/>
  ))
  .add('confirm button', () => (
    <Button modifiers={["confirm"]} title="Подтвердить"/>
  ))
  