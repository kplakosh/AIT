import { Navigate, Route, Routes } from 'react-router-dom'
import { PageLayout } from './components/layout/PageLayout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
