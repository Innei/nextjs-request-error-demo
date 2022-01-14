import { $axios } from '../utils/axios'

const _404 = (props) => {
  return <pre>{props.data}</pre>
}

_404.getInitialProps = async () => {
  const { data } = await $axios.get('/mock/404')
  return data
}

export default _404
