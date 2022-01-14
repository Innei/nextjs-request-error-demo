import { $axios } from '../utils/axios'

const _403 = (props) => {
  return <pre>{props.data}</pre>
}

_403.getInitialProps = async () => {
  const { data } = await $axios.get('/mock/403')
  return data
}

export default _403
