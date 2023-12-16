import React from 'react'
import './FrameOne.css'
import { DayType } from '../../types';
import Weeks from '../Weeks/Weeks';
interface Props {
  days: DayType[];
}

const FrameOne: React.FC<Props> = ({ days }) => {

  const weeks: DayType[][] = [];
  let weekDay: DayType[] = []

  const months = ['Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.', 'Янв.', 'Февр.', 'Март',]


  let numberDay: number = 0  
  days.map((day: DayType , index) => {
    numberDay++
    weekDay.push(day)
    if (numberDay === 7) {
      numberDay = 0
      weeks.push(weekDay)
      weekDay = []
    }
  })

  return (
    <div className='calendar'>
      <div className='months'>
        {months.map((month, index) => (
          <div key={index}>{month}</div>
        ))}

      </div>
      <div className='daysAndWeek'>
        <div className='days-week'>
          <div>Пн</div>
          <div>Ср</div>
          <div>Пт</div>
        </div>
        <div className='days'>
          {weeks.map((week: DayType[] , index) => (
            <Weeks key={index} week={week}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FrameOne
