import React,{Component} from "react"
import Header from '../../components/Header/index.js'
import Footer from '../../components/Footer/index.js'
import './index.less'
class App extends Component {
    render(){
        return(
            <div className="app">
              <Header />
               <Footer />
            </div>
        )
    }
}

export default App
