import { Header } from "./components/Header"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"

 

function App() {
 

  return (
    <>
       <main className="overflow-hidden">
        <Header/>
        <Hero/>
        <Features/>
        <Pricing/>
       </main>
    </>
  )
}

export default App
