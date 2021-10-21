import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {Text} from 'react-native';
import fb from './hailJesus/FirebaseInterface';

import user from './UserState';
export function GiftedChatWrapper() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  function removeDuplicates(iMessages: IMessage[]) {
    const set = new Set<string>();

    return iMessages.filter(item => {
      if (set.has(item._id as string)) {
        return false;
      }

      set.add(item._id as string);
      return true;
    });
  }
  useEffect(() => {
    return fb.registerForNewMessages(messageFromServer => {
      const msg = messageFromServer.val() as IMessage;
      setMessages(previousMessages => {
        return removeDuplicates(GiftedChat.append(previousMessages, [msg]));
      });
    });
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    messages.forEach(message => {
      message.user._id = user.currentUser();
    });
    fb.writeUserData(messages);
    setMessages(previousMessages =>
      removeDuplicates(GiftedChat.append(previousMessages, messages)),
    );
  }, []);

  return (
    <>
      <Text>Hello World</Text>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: user.currentUser(),
        }}
      />
    </>
  );
}

export default GiftedChatWrapper;
