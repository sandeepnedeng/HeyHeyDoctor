/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import fb from './src/hailJesus/FirebaseInterface';

import ChatWindow from './src/ChatWindow';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fb.registerForNewMessages(messageFromServer => {
      setMessage(messageFromServer);
    });
  }, []);
  return (
    <SafeAreaView>
      <ChatWindow
        message={message}
        sendToServer={message => {
          fb.writeUserData(message);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
