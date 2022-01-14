import { $axios } from '../utils/axios'

const Index = (props) => {
  return <pre>{props.data}</pre>
}

Index.getInitialProps = async () => {
  const { data } = await $axios.get('/mock/data')
  return data
}

export default Index
