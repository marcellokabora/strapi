import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import GlobalStyles from './components/styles/Global'

import DashboardComponent from './components/Dashboard.component'

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
    headers: { "Authorization": "Bearer API_KEY" }
  })

  return (
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <DashboardComponent/>
    </ApolloProvider>
  )
}

export default App
