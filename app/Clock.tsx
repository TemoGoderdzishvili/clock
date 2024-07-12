import styles from "./Clock.module.css"
import { useState } from "react"
import { useEffect } from "react"

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    const formatTime = () => {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()

        hours = hours % 12 || 12    //CONVERTING MILITARY TIME TO STANDARD

        const clock = `${zero(hours)}:${minutes}:${zero(seconds)}`

        return `${clock}`
    }

    const zero = (num: number) => {
        return (num < 10 ? '0' : '') + num
    }

    const formatDate = () => {
        const day = time.getUTCDate()
        const month = time.getUTCMonth() + 1
        const year = time.getUTCFullYear()
        const date = `${zero(day)}.${zero(month)}.${year}`

        return `${date}`
    }

    const formatDayOfWeek = () => {
        const dayOfWeek = daysOfWeek[time.getUTCDay() - 1]
        return dayOfWeek
    }

    return (
        <div className={styles.container}>
            <div className={styles.clock}>
                <span>{formatTime()}</span>
                <span>{formatDate()}</span>
                <span className={styles.dayOfWeek} style={{color: 'black', fontSize: '50px'}}>{formatDayOfWeek()}</span>
            </div>
        </div>
    )
}
export default Clock