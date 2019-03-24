import React, { PureComponent } from 'react';
import Header from '../components/header';

export default class Groups extends PureComponent {
  render() {
    return (
      <div>
        <Header title="группа" 
          avatarUrl="https://via.placeholder.com/32x32"
          avatarUrl2x="https://via.placeholder.com/64x64"
          userName="User Name"/>
        Groups
      </div>
    );
  }
}