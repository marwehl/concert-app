import React from 'react'
import Concert from './Concert'

export default {
  title: 'Concert',
};

export const concert = () => <Concert artist={'Ben Howard'} date={'11.09.2020'} place={'Mojo'}
styles={['rock', 'pop']}/>;
