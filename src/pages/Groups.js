import React, { PureComponent, Fragment } from 'react';
import Header from '../components/header';
import Input from '../components/input';
import CardUser from '../components/cardUser';

export default class Groups extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header title="Про бизнес" 
          avatarUrl="https://via.placeholder.com/32x32"
          avatarUrl2x="https://via.placeholder.com/64x64"
          userName="User Name"/>
        <main>
          <div className="search-input">
            <Input modifiers="search" type="text" placeholder="Поиск"/>
          </div>
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
          <CardUser
            avatarUrl="https://via.placeholder.com/32x32"
            avatarUrl2x="https://via.placeholder.com/64x64"
            userName="Александр Чикилев"
            userLink="./User"
          />
        </main>
      </Fragment>
    );
  }
}