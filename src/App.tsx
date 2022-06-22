// Vamos utilizar o apolo para a realização de requisições GraphQl

import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apolo"

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

  console.log(data);
  // A estilização no TailWind é feita totalmente por classes
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}
export default App
