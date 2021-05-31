import { useEffect, useRef, useState } from "react"

const formatDate = (days, hours, minutes, seconds) =>
  `${days} dagen en ${hours}:${minutes}:${seconds}`

const CountDown = ({ toDate }) => {
  const [dateString, setDateString] = useState("")

  const interval = useRef()
  useEffect(() => {
    interval.current = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = toDate - now

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60) / 2,
      )
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setDateString(formatDate(days, hours, minutes, seconds))
    })

    return () => {
      clearInterval(interval.current)
    }
  })
  return <h1>Nog {dateString} dagen totdat we open mogen!</h1>
}

export default CountDown
