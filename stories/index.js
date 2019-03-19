import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';
import '../src/components/button.scss';
import '../src/index.scss';
import { Card }  from '../src/components/card';
import '../src/components/card.scss';


storiesOf('Button', module)
  .add('with text', () => (
    <Button className="button button--confirm" text="Подтвердить"/>
  ))
 
storiesOf('Card', module)
  .add('card', () => (
    <Card avatarUrl="https://avatarko.ru/img/kartinka/11/multfilm_Simpsons_10262.jpg" 
    			cardTitle='Клуб Про бизнес' 
    			cardText='Встреча Клуба Про бизнес
							     с Олегом Хусаеновым 20 марта в отеле «Ренессанс Минск» пройдет закрытая встреча с Олегом Хусаеновым,
							     сооснователем и СЕО «Зубр Капитал» и сооснователем автомобильного холдинга «Атлант-М».
							     Это уникальная  возможность задать Олегу Ильгизов...
							     Еще ЕЕщ.юлюбые вопросы, касающиеся вашего бизнеса.
							     Интерактивный формат вопросов и ответов между ментором Клуба и аудиторией. 
							     Не упустите свою возможность.' 
					 timeOfActivity='5 минут назад' 
					 numOfMembers='41 член' 
					 like='22' 
					 dislike='42' />
  ))