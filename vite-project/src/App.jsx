import { Component } from 'react'
// import './App.css'
import Wine from "./Wine"

class App extends Component {
  render() {
    return (
      <>
      <Wine title = "sth" description = "sb" rating = "4"/>
      <Wine title = "hh" description = "yy" rating = "64"/>
      <Wine title = "yeu" description = "oo" rating = "44"/>
      <Wine title = "new" description = "something" rating = "65"/>
      </>
    )
  }
}

export default App;
