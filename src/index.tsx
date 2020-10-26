import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Card, Content, Grid, Title } from './components'
import { configureStore, unregister } from './core'
import { GlobalStyles, theme } from './styles'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Content data-cy="content">
          <Title data-cy="title">Soduko</Title>

          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()
