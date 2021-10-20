
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {Text} from 'react-native';
import fb from './hailJesus/FirebaseInterface';
import user from './UserState';

export function GiftedChatWrapper() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    fb.registerForNewMessages(messageFromServer => {
      console.log('Hey Hey Hey');
      console.log(messageFromServer);
      // setMessages(previousMessages =>
      //   GiftedChat.append(previousMessages, [messageFromServer]),
      // );
    });
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: user.otherUser(),
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: user.otherUser(),
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    fb.writeUserData(messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <>
      <Text>Hello World</Text>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}

export default GiftedChatWrapper;
