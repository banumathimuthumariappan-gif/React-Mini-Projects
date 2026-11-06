import './App.css'
import Accordion from './pages/Accordion'
import MultiOpenAccordion from './pages/MultiOpenAccordion'

function App() {

  return (
    <div className="container">
      <div className='text-center m-4'>
        <h2 className='fw-bold'>React Accordion</h2>
      </div>
      {/* <Accordion /> */}
      <MultiOpenAccordion />
    </div>
  )
}

export default App
