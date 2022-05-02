import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Editor from "./components/Editor/EditorWithInferredTypes"

function App() {
   const [count, setCount] = useState(0)

   return (
      <div className="App">
         <header className="App-header">
            <Editor readonly={true} />
         </header>
      </div>
   )
}

export default App
