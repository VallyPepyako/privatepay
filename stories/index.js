import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';
import '../src/index.scss';
import profile, {ReactComponent as ProfileLogo} from '../src/static/icons/account.svg'

storiesOf('Buttons', module)
  .add('pure button', () => (
    <Button > 
      Подтвердить
    </Button> 
  ))
  .add('login button', () => (
    <Button modifiers={["login"]}> 
      Подтвердить
    </Button> 
  ))
  .add('confirm button', () => (
    <Button modifiers={["confirm"]}>
    Подтвердить
    </Button>
  ))
  .add('icon confirm button', () => (
    <Button modifiers={["confirm"]}>
      Подтвердить
      <ProfileLogo />
    </Button>
  ))