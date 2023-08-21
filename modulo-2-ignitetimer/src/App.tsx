import { Button } from './components/Button.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
