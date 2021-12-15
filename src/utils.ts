const jwt = require('jsonwebtoken');

export const generateAuthToken = async (payload) => {
  const token = await jwt.sign(payload, process.env.JWT_AUTH_SECRET, {
    expiresIn: '60s',
  });
  return token;
};

export const encodeMessageTypeToEmoji = (type: string) => {
  switch (type) {
    case 'GIFT_STATUS_CHANGED':
      return '🎁';
    case 'ALERT':
      return '⚠️';
    case 'NEWS':
      return '📰';
    case 'THANK_SANTA':
      return '🎅🏻';
    default:
      return 'ℹ️';
  }
};

export const translateDeliverStatus = (status: string) => {
  switch (status) {
    case 'pending':
      return 'Обрабатывается ⌛';
    case 'delivered':
      return 'Готово к выдаче 📫';
    case 'received':
      return 'Выдано ✨';
    default:
      return 'Обрабатывается ⌛';
  }
};
