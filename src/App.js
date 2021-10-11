import img1 from './images/bluse-floral.png'
import img2 from './images/pullover-gruen.png'
import img3 from './images/pullover-rosa.png'
import img4 from './images/t-shirt-floral.png'

const INITIAL_DATA = [
  { id: '1', imageUrl: img1 },
  { id: '2', imageUrl: img2 },
  { id: '3', imageUrl: img3 },
  { id: '4', imageUrl: img4 },
]

function App() {
  return (
    <div>
      {INITIAL_DATA.map((data) => (
        <img src={data.imageUrl} alt="" />
      ))}
    </div>
  )
}

export default App
