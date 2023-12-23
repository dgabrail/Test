import React from 'react'
import { DayType } from '../../types'
import Day from '../Day/Day'
interface Props {
  week: DayType[]
}

const Weeks: React.FC<Props> = (week) => {
  return (
    <div>
      {week.week.map((day, index) =>
        (<Day weekDay={day.weekDay} key={index} index={index} date={day.date} contribution={day.contribution} style={day.style} />)
      )}
    </div>
  )
}

export default Weeks
