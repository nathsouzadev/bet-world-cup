import { Header } from "../components/Header/Header"

export default function Home() {
  return (
    <Header/>
  )
}

export const getServerSideProps = async() => {
  const response = await fetch('http://localhost:5000/pools/count')
  const data = await response.json()
  console.log(data)
  return { 
    props: {} 
  }
}