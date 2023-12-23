import React from 'react'
import './Frame.css'
import { DayType } from '../../types';
import Weeks from '../Weeks/Weeks';

interface Props {
  days: DayType[];
  setDays: {};
}

const FrameOne: React.FC<Props> = ({ days }) => {

  const BigDays: DayType[] = [];
  let numberDays = 32
  let contribution = 0
  const weeks: DayType[][] = [];
  let weekDay: DayType[] = []
  let monthName = '';
  const years = [2022, 2023]

  years.map((year) => {
    if (year === 2022) {
      for (let i = 12; i < 13; i++) {
        for (let e = 24; e < 32; e++) {
          days.map((dayIndex: DayType, index) => {
            const month = parseInt(Array.from(dayIndex.date).splice(5).join(''));
            const numberDay = parseInt(Array.from(dayIndex.date).splice(8).join(''));
            const numberYear = parseInt(Array.from(dayIndex.date).splice(0).join(''))
            if (i === month && e === numberDay && year === numberYear) {
              contribution++
              dayIndex.date = monthName + e + ', ' + year
              BigDays.push(dayIndex)
            }
          })

          if (contribution === 0) {
            const day: DayType = {
              date: monthName + e + ', ' + year,
              contribution: 0,
              style: 'Vector',
              weekDay: '',
            }

            BigDays.push(day)
          }

          contribution = 0
        }
      }
    }
    if (year === 2023) {
      for (let i = 1; i < 13; i++) {

        if (i === 1) {
          monthName = 'Январь '
        } else if (i === 2) {
          monthName = 'Февраль '
        } else if (i === 3) {
          monthName = 'Март '
        } else if (i === 4) {
          monthName = 'Апрель '
        } else if (i === 5) {
          monthName = 'Май '
        } else if (i === 6) {
          monthName = 'Июнь '
        } else if (i === 7) {
          monthName = 'Июль '
        } else if (i === 8) {
          monthName = 'Август '
        } else if (i === 9) {
          monthName = 'Сентябрь '
        } else if (i === 10) {
          monthName = 'Октябрь '
        } else if (i === 11) {
          monthName = 'Ноябрь '
        } else if (i === 12) {
          monthName = 'Декабрь '
        }

        if (i === 4 || i === 6 || i === 9 || i === 11) {
          numberDays = 31
        } else if (i === 2) {
          numberDays = 29
        } else if (i === 12) {
          numberDays = 16
        }
        else {
          numberDays = 32
        }


        for (let e = 1; e < numberDays; e++) {
          days.map((dayIndex: DayType, index) => {
            const month = parseInt(Array.from(dayIndex.date).splice(5).join(''));
            const numberDay = parseInt(Array.from(dayIndex.date).splice(8).join(''));
            const numberYear = parseInt(Array.from(dayIndex.date).splice(0).join(''))
            if (i === month && e === numberDay && year === numberYear) {
              contribution++
              dayIndex.date = monthName + e + ', ' + year
              BigDays.push(dayIndex)
            }
          })

          if (contribution === 0) {
            const day: DayType = {
              date: monthName + e + ', ' + year,
              contribution: 0,
              style: 'Vector',
              weekDay: '',
            }

            BigDays.push(day)
          }

          contribution = 0
        }
      }
    }
  })


  const months = ['Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.', 'Янв.', 'Февр.', 'Март',]


  let numberDay: number = 0
  BigDays.map((day: DayType, index) => {
    numberDay++
    weekDay.push(day)
    if (numberDay === 7) {
      numberDay = 0
      weeks.push(weekDay)
      weekDay = []
    }

  })

  console.log(BigDays)

  return (
    <div className='calendar'>
      <div className='days-week'>
        <div>Пн</div>
        <div>Ср</div>
        <div>Пт</div>
      </div>
      <div className='daysAndWeek'>
        <div className='months'>
          {months.map((month, index) => (
            <div className='month' key={index}>{month}</div>
          ))}

        </div>
        <div className='days'>
          {weeks.map((week: DayType[], index) => (
            <Weeks key={index} week={week} />
          ))}
        </div>
        <div className='colors'>
          <div><span>Меньше</span></div>
          <div className='colorsCub'>
            <div className='Vector'></div>
            <div className='Vector Vector-nine'></div>
            <div className='Vector Vector-nineteen'></div>
            <div className='Vector Vector-twenty-nine'></div>
            <div className='Vector Vector-thirti'></div>
          </div>
          <div><span>Больше</span></div>
        </div>
      </div>
    </div>
  )
}

export default FrameOne
