import React from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer } from './components';
import './App.css';

const apiKey = 'acpmfa97efut';

const client = StreamChat.getInstance(apiKey);

export default function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}
