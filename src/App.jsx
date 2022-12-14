// import Header component from components directory
import { Header } from './components'

const App = () => {
  return (
    <header className='min-h-screen flex flex-col relative hero'>
      {/* Wrap header component within the homepage */}
      <Header />
      <div className='flex justify-center items-start p-6 -mt-20'/>
    </header>
  )
}


export default App