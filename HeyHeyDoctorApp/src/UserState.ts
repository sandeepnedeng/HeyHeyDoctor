import {Platform} from 'react-native';

class UserState {
  currentUser(): number {
    if (Platform.OS === 'android') {
      return 1;
    } else {
      return 2;
    }
  }

  otherUser(): number {
    if (Platform.OS === 'android') {
      return 2;
    } else {
      return 1;
    }
  }
}

export default new UserState();
