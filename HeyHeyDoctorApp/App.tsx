/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import GiftedChatWrapper from './src/GiftedChatWrapper';
//
// const App = () => {
//   const [message, setMessage] = useState('');
//
//   useEffect(() => {
//     fb.registerForNewMessages(messageFromServer => {
//       setMessage(messageFromServer);
//     });
//   }, []);
//   return (
//     <SafeAreaView>
//       <ChatWindow
//         message={message}
//         sendToServer={message => {
//           fb.writeUserData(message);
//         }}
//       />
//     </SafeAreaView>
//   );
// };

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GiftedChatWrapper />
    </SafeAreaView>
  );
};
export default App;
