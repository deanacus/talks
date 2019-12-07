import React from 'react';
import { ThemeProvider } from 'styled-components'

import { Header, TalksList, Footer } from '../'
import { talks } from '../../Data';
import { theme } from '../../Config/theme'

export const App = () => (
  <ThemeProvider theme={theme}>
    <div className="app-container">
      <Header />
      <TalksList talks={talks} />
      <Footer />
    </div>
  </ThemeProvider>
)
