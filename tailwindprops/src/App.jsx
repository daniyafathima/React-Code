import './App.css'
import Card from './components/cards'
function App() {
  let myObj={
    userName:"Daniya",
    age:20
  }
  let myarr=[1,2,3]
  return (
    <>
      <h1 className="bg-amber-700 text-black p-5 rounded-xl text-center text-2xl font-bold mb-10">
        Tailwind Test
      </h1>
      <Card username="Daniyaaa" btn="FirstName" />

      <Card username="Fathimaa" btn="" />

    </>
  )
}

export default App
