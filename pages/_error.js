// @ts-check

import { RequestError } from '../utils/axios'
import styles from './error.module.css'
const MyErrorPage = ({ message, statusCode }) => {
  return (
    <div className={styles['error']}>
      <div>
        <h1>{statusCode}</h1>
        <div className={styles['desc']}>{message}</div>
      </div>
    </div>
  )
}
MyErrorPage.getInitialProps = async ({ res, err }) => {
  if (err instanceof RequestError) {
    const { status, message } = err

    res && (res.statusCode = typeof status === 'number' ? status : 408)
    return {
      statusCode: status,
      message,
    }
  }

  return { statusCode: res.statusCode, message: '' }
}

export default MyErrorPage
