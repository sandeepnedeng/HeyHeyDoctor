import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native';

const ChatWindow = ({
  message,
  sendToServer,
}: {
  message: string;
  sendToServer: (message: string) => void;
}) => {
  const [text, setText] = useState('');

  return (
    <>
      <Text>Some one sent this message: {message}</Text>
      <TextInput
        style={{
          borderColor: 'black',
          width: '100%',
          height: '30%',
          borderWidth: 2,
        }}
        onChangeText={setText}
        value={text}
      />
      <Button
        title={'Click '}
        onPress={() => {
          sendToServer(text);
        }}
      />
    </>
  );
};

export default ChatWindow;
