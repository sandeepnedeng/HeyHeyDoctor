import {
  getDatabase,
  Database,
  ref,
  set,
  push,
  onChildAdded,
  Unsubscribe,
} from 'firebase/database';
import {initializeApp} from 'firebase/app';
import {IMessage} from 'react-native-gifted-chat';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCoLzgx-9dI0u-yYSDUHEkmWxcCCBWE054',
  authDomain: 'heyheydoc-f1106.firebaseapp.com',
  databaseURL:
    'https://heyheydoc-f1106-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'heyheydoc-f1106',
  storageBucket: 'heyheydoc-f1106.appspot.com',
  messagingSenderId: '308560103294',
  appId: '1:308560103294:web:4b32ba2c5871de2f6bd52f',
  measurementId: 'G-ZMMLCC82FW',
};

class FirebaseInterface {
  database: Database;
  unsubscribe?: Unsubscribe;

  constructor() {
    let app = initializeApp(firebaseConfig);
    this.database = getDatabase(app);
  }

  writeUserData(messages: IMessage[]) {
    let messageRef = ref(this.database, 'users/drsandeep/messages');
    const newMessageRef = push(messageRef);

    messages.forEach(({_id, createdAt, text, user}) => {
      console.log('Writing Data');

      set(newMessageRef, {
        _id,
        createdAt: (createdAt as Date).toISOString(),
        text,
        user,
      });
    });
  }

  registerForNewMessages(messageListener: (message: any) => void) {
    if (this.unsubscribe !== undefined) {
      this.unsubscribe();
    }

    this.unsubscribe = onChildAdded(
      ref(this.database, 'users/drsandeep/messages'),
      snapshot => {
        messageListener(snapshot);
      },
    );
  }
}

export default new FirebaseInterface();
