import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import styled from "styled-components"

import GlobalStyles from './components/styles/Global'
import CardComponent from './components/CardComponent'
import MapComponent from './components/MapComponent'

import Arrow from "./assets/icons/Arrow.svg"

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
    headers: { "Authorization": "Bearer API_KEY" }
  })

  const DashBoard = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
  `
  const FlexContainer = styled.div`
    flex: ${({width}) => width};
    background-color: ${({bg}) => bg};
    color: ${({color}) => color};
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `
  return (
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <DashBoard>
        <FlexContainer width="2" bg="white" color="black">
          <div style={{
              height: '80px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            boxShadow: '0px 0px 10px grey',
            backgroundColor: 'white',
          }}>
            <h2 style={{
              paddingLeft: 20,
              letterSpacing: 2
              }}>SPACE TRIPS</h2>
          </div>
            <div style={{
              overflow: 'auto',
              height: '100%'
            }}>
              <CardComponent />
            </div>
        </FlexContainer>
        <FlexContainer width="4" bg="black" color="white">
          <div style={{
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            boxShadow: '0px 0px 10px #D2D2D2',
            backgroundColor: '#404040',
          }}>
            <div style={{
              display: 'flex',
              width: '100%'
            }}>
              <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
                fontWeight: 'lighter'
              }}>
                <h3>Departure</h3>
                <h3>Departure Time</h3>
              </div>
            </div>
            <div style={{
              backgroundColor: '#E8BF36',
              height: '100%',
              padding: '20px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
            <div style={{
              height: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}>
            <MapComponent />
          </div>
        </FlexContainer>
      </DashBoard>
    </ApolloProvider>
  )
}

export default App
