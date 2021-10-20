import {
  getDatabase,
  Database,
  ref,
  set,
  onValue,
  Unsubscribe,
} from 'firebase/database';
import {initializeApp} from 'firebase/app';

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

  writeUserData(message: string) {
    console.log(`Writing ${message}`);
    set(ref(this.database, 'users/drsandeep'), {
      time: new Date().toISOString(),
      message: message,
    });
  }

  registerForNewMessages(messageListener: (message: string) => void) {
    if (this.unsubscribe !== undefined) {
      this.unsubscribe();
    }
    this.unsubscribe = onValue(
      ref(this.database, 'users/drsandeep/message'),
      snapshot => {
        messageListener(snapshot.val() as string);
      },
    );
  }
}

export default new FirebaseInterface();
