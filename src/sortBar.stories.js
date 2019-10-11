import React from 'react'
import SortBar from './SortBar'



export default {
  title: 'Sortbar',
  decorators: [Wrapper]
};

function Wrapper(storyFn) {
  return <div style={{ width: '400px', padding: '10px', background: 'white' }}>{storyFn()}</div>
}

export const sortbar = () => <SortBar />;
