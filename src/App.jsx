import './App.css'
import Card from './Components/Card'
import ShowHide from './Components/ShowHide'
import vehicles from './data/vehicles'

function App() {

  const vehiclesList = vehicles.map(v => {
    // eslint-disable-next-line react/jsx-key
    return <Card title={v.name}
      description={v.description} />
  })
  return (
    <div className='App'>
      <h1>Hola REACT</h1>
      <div className='container'>
        {vehiclesList}
      </div>


    </div>
  )
}

export default App
