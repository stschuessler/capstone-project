import img1 from './images/bluse-floral.png'
import img2 from './images/pullover-gruen.png'
import img3 from './images/pullover-rosa.png'
import img4 from './images/t-shirt-floral.png'
import Clothing from './components/Clothing'

const INITIAL_DATA = [
  { id: '1', imageUrl: img1 },
  { id: '2', imageUrl: img2 },
  { id: '3', imageUrl: img3 },
  { id: '4', imageUrl: img4 },
  { id: '5', imageUrl: img1 },
  { id: '6', imageUrl: img2 },
  { id: '7', imageUrl: img3 },
  { id: '8', imageUrl: img4 },
]

function App() {
  return (
    <main>
      {INITIAL_DATA.map((data) => (
        <Clothing key={data.id} imageUrl={data.imageUrl} />
      ))}
    </main>
  )
}

export default App
