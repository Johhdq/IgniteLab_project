// Vamos utilizar o apolo para a realização de requisições GraphQl

import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";
import { client } from "./lib/apolo"
import { Event } from "./pages/Event";

// gql para ter a sintax highlight
const GET_LESSONS_QUERRY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
        bio
      }
    }
  }
` 
interface Lesson {
  id: string;
  title: string;
}

function App() {
  // Pode-se fazer querys dessa forma utilizando o UseEffect

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERRY
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERRY);
  // A estilização no TailWind é feita totalmente por classes
  return (
      <Event />
  )
}
export default App
