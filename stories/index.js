import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';
import { Card } from '../src/components/card';
import '../src/index.scss';
import profile, {ReactComponent as ProfileLogo} from '../src/static/icons/account.svg'


storiesOf('Buttons', module)
  .add('pure button', () => (
    <Button > 
      Подтвердить
    </Button> 
  ))
  .add('login button', () => (
    <Button modifiers="login"> 
      Подтвердить
    </Button> 
  ))
  .add('confirm button', () => (
    <Button modifiers="confirm">
    Подтвердить
    </Button>
  ))
  .add('icon confirm button', () => (
    <Button modifiers="confirm">
      Подтвердить
      <ProfileLogo />
    </Button>
  ))
storiesOf('Card', module)
	.add('card', () => (
		<Card avatarUrl = 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png'
					cardTitle = 'Клуб Про бизнес'
					cardText = 'Встреча Клуба Про бизнес с Олегом Хусаеновым 20 марта в отеле «Ренессанс Минск» пройдет закрытая встреча с Олегом Хусаеновым, сооснователем и СЕО «Зубр Капитал» и сооснователем автомобильного холдинга «Атлант-М». Это уникальная  возможность задать Олегу Ильгизов...	Еще ЕЕщ.юлюбые вопросы, касающиеся вашего бизнеса. Интерактивный формат вопросов и ответов между ментором Клуба и аудиторией. Не упустите свою возможность.'
					timeOfActivity = '5 минут'
					numOfMembers = '41 член'
					like = '22'
					dislike = '41' /> 

	))
