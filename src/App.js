import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import GlobalStyles from './components/styles/Global'

import LayoutDashBoard from './layout/Dashboard/Dashboard'

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
    headers: { "Authorization": "Bearer API_KEY" }
  })

  return (
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <LayoutDashBoard/>
    </ApolloProvider>
  )
}

export default App
