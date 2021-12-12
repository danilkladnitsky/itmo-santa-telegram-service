import { USER_PROFILE_SCENE } from 'app.constants';
import { Keyboard } from 'telegram-keyboard';

export const aboutLanguageKeyboard = ({ text }) =>
  Keyboard.make([
    {
      text,
      type: 'button',
      callback_data: JSON.stringify({ queryType: 'ABOUT_LANGUAGE' }),
    },
  ]).inline();

export const authLinkKeyboard = ({ url, text }) =>
  Keyboard.make([
    {
      text,
      type: 'button',
      url,
    },
  ]).inline();

export const onRegistrationKeyboard = (text) =>
  Keyboard.make([
    {
      text,
      type: 'button',
      callback_data: JSON.stringify({ queryType: USER_PROFILE_SCENE }),
    },
  ]).inline();
