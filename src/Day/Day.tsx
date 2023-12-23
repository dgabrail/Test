import React from 'react'
import './Day.css';

interface Props {
  contribution: any | number;
  style: string
  date: string
  index: number
  weekDay: string
}


const Day: React.FC<Props> = ({ contribution, style, date, index , weekDay}) => {

  if (index === 0) {
    weekDay = 'Понедельник'
  } else if (index === 1) {
    weekDay = 'Вторник'
  } else if (index === 2) {
    weekDay = 'Среда'
  } else if (index === 3) {
    weekDay = 'Четверг'
  } else if (index === 4) {
    weekDay = 'Пятница'
  } else if (index === 5) {
    weekDay = 'Суббота'
  } else if (index === 6) {
    weekDay = 'Воскресенье'
  }

  if (contribution > 0 && contribution < 10) {
    style = style + ' ' + 'Vector-nine'
  } else if (contribution > 9 && contribution < 20) {
    style = style + ' ' + 'Vector-nineteen'
  } else if (contribution > 19 && contribution < 30) {
    style = style + ' ' + 'Vector-twenty-nine'
  } else if (contribution >= 30) {
    style = style + ' ' + 'Vector-thirti'
  }


  return (
    <div className={style} >
      <div className='dropdown-window'>
        <div className='contributions'>{contribution + ' contributions'}</div>
        <div>{weekDay + ' ' + date}</div>
      </div>
    </div>
  )
}

export default Day
