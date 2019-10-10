import React from 'react'
import Concert from './Concert'
import mumford from './images/mumford.jpg'

export default {
  title: 'Concert',
  decorators: [Wrapper]
};

function Wrapper(storyFn) {
  return <div style={{ width: '300px', padding: '15px', background: '#dbdfec' }}>{storyFn()}</div>
}

export const concert = () => <Concert artist={'Ben Howard'} date={'11.09.2020'} place={'Mojo'}
  genres={['Rock', 'Pop']} image={mumford} />;

export const concertBookmarked = () => <Concert artist={'Ben Howard'} date={'11.09.2020'} place={'Mojo'}
  genres={['Rock', 'Pop']} image={mumford} isFavorite={true} />;
