import { useEffect, useRef, useState } from "react"

const formatTime = (hours, minutes, seconds) => `${hours}:${minutes}:${seconds}`

const CountDown = ({ toDate }) => {
  const [dateDiff, setDateDiff] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  })

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
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setDateDiff({
        days,
        hours,
        minutes,
        seconds,
      })
    })

    return () => {
      clearInterval(interval.current)
    }
  })
  return (
    <h1>
      Nog {dateDiff.days} dagen en{" "}
      {formatTime(dateDiff.hours, dateDiff.minutes, dateDiff.seconds)} totdat we
      open mogen!
    </h1>
  )
}

export default CountDown
