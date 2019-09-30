import React from 'react'
import Concert from './Concert'
import mumford from './images/mumford.jpg'

export default {
  title: 'Concert',
};

export const concert = () => <Concert artist={'Ben Howard'} date={'11.09.2020'} place={'Mojo'}
styles={['rock', 'pop']} image={mumford}/>;
