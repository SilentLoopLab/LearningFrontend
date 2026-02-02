"use client"

import axios from "axios"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    axios.
    get("api/users")
    .then(res => {
      console.log(res.data);
    })
  })
  return (
    <div className="p-4">
      <h1>Hello!</h1>
    </div>
  )
}