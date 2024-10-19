import './App.css'
import { CtaButton } from './components/CtaButton'
import { FreeCard1 } from './components/FreeCard1'
import { FreeCard2 } from './components/FreeCard2'
import { GrowthCard1 } from './components/GrowthCard1'
import { GrowthCard2 } from './components/GrowthCard2'

function App() {

  return (
    <div className='test-assignment'>

      <CtaButton></CtaButton>

      <div className='frame-100'>
        <FreeCard1 ></FreeCard1>
        <GrowthCard1 ></GrowthCard1>
        <GrowthCard2 ></GrowthCard2>
        <FreeCard2 ></FreeCard2>
      </div>

    </div>
  )
}

export default App
