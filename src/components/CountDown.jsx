import { useEffect, useRef, useState } from "react"

const formatTime = (hours, minutes, seconds) => {
  return `${hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`
}

const CountDown = ({ toDate }) => {
  const [dateDiff, setDateDiff] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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

  if (new Date() > toDate) {
    return <h1>KOM</h1>
  }

  if (dateDiff.days === 0) {
    return (
      <h1>
        Nog maar{" "}
        {formatTime(dateDiff.hours, dateDiff.minutes, dateDiff.seconds)} uur
        totdat we open mogen!!!!!!!!
      </h1>
    )
  }

  return (
    <h1>
      Nog {dateDiff.days} dagen en{" "}
      {formatTime(dateDiff.hours, dateDiff.minutes, dateDiff.seconds)} uur
      totdat we open mogen!
    </h1>
  )
}

export default CountDown
