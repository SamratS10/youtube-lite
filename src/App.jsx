import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { Header,Feed,VideoDetail,ChannelDetails,ClientSearch } from './components'


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/search/:query" element={<ClientSearch/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
