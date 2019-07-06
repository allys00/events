
import { Alert } from 'react-native'

const AlertWrapper = (title, message) => (
  Alert.alert(
    title,
    message,
    [
      { text: 'OK', style: 'cancel' },
    ],
    { cancelable: false },
  )
)
export default AlertWrapper;
