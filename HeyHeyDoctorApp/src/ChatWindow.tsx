import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';

import fb from './hailJesus/FirebaseInterface';

const ChatWindow = () => {
  const [text, setText] = useState('');

  return (
    <>
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
          fb.writeUserData(text);
        }}
      />
    </>
  );
};

export default ChatWindow;
