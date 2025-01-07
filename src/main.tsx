import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{
      token: {

      },
      components: {
        Button: {
          
        },
        Radio: {
          
        }
      }
    }} >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
