import React, { PureComponent, Fragment } from 'react';
import Header from '../components/header';

export default class Main extends PureComponent {

  render() {
    return (
      <Fragment>
      <Header title="Главная"></Header>
      <main>
        Главная страница
      </main>
      </Fragment>
    );
  }
}
