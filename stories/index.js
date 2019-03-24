import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';
import { Footer } from '../src/components/footer';
import { Card } from '../src/components/card';
import { SocialBlock } from '../src/components/social-block'
import { Input } from '../src/components/input';
import { Avatar } from '../src/components/avatar';
import { BrowserRouter as Router} from "react-router-dom";
import '../src/index.scss';
import profile, {ReactComponent as ProfileLogo} from '../src/static/icons/account.svg'
import {CardUser} from "../src/components/cardUser";


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
          cardPicture = 'https://steemitimages.com/DQmXGHFUaxzaseKiMTTvbmST4T256H5Lnze12hCSmqUVAWZ/young-male-lions-playing-with-each-other-jumping-into-air-picture-id171116536.jpg'
					cardText = 'Встреча Клуба Про бизнес с Олегом Хусаеновым 20 марта в отеле «Ренессанс Минск» пройдет закрытая встреча с Олегом Хусаеновым, сооснователем и СЕО «Зубр Капитал» и сооснователем автомобильного холдинга «Атлант-М». Это уникальная  возможность задать Олегу Ильгизов...	Еще ЕЕщ.юлюбые вопросы, касающиеся вашего бизнеса. Интерактивный формат вопросов и ответов между ментором Клуба и аудиторией. Не упустите свою возможность.'
					timeOfActivity = '5 минут'
					numOfMembers = '41 член'
					like = '22'
					dislike = '41' />

	))


storiesOf('SocialBlock', module)
  .add('block-link', () => (
      <Router>
        <SocialBlock />
      </Router>
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

storiesOf('Avatar', module)
    .add('small', () => (
        <Avatar
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            modifiers="small"
            alt="alt"
        />
    ))
    .add('medium', () => (
        <Avatar
            avatarUrl="https://via.placeholder.com/50x50"
            avatarUrl2x="https://via.placeholder.com/100x100"
            modifiers="medium"
            al
        />
    ))
    .add('large', () => (
        <Avatar
            avatarUrl="https://via.placeholder.com/100x100"
            avatarUrl2x="https://via.placeholder.com/200x200"
            modifiers="large"
        />
    ))

storiesOf('Card User', module)
    .add('simple', () => (
        <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="User Name"
            userLink="./User"
        />
    ))