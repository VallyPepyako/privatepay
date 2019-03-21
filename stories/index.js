import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';
import { Footer } from '../src/components/footer';
import { Card } from '../src/components/card';
import { Input } from '../src/components/input';
import { BrowserRouter as Router} from "react-router-dom";
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

storiesOf('Footer', module)
    .add('standard', () => (
      <Router>
        <Footer className="footer"/>
      </Router>
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

storiesOf('Input', module)
    .add('text', () => (
        <Input type="text"
               placeholder="текст"
        />
    ))
    .add('search', () => (
        <Input type="search"
               placeholder="поиск"
               modifiers="search"
        />
    ))
    .add('e-mail', () => (
        <Input type="e-mail"
               placeholder="логин"
               modifiers="login"
        />
    ))
    .add('password', () => (
        <Input type="password"
               placeholder="пароль"
               modifiers="login"
        />
    ))

