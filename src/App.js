import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {orginals, action, comedy, horror, romance, documentaries} from './url'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import Footer from './components/Footer/Footer'
const  title=["Netflix Orginals", 'Action', 'Comedy', 'Horror', 'Romance', 'Documentaries'];

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={orginals} title={title[0]} />
      <RowPost url={action} title={title[1]} isSmall/>
      <RowPost url={comedy} title={title[2]} isSmall/>
      <RowPost url={horror} title={title[3]} isSmall/>
      <RowPost url={romance} title={title[4]} isSmall/>
      <RowPost url={documentaries} title={title[5]} isSmall/>
      <Footer />
    </div>
  )
}
export default App
