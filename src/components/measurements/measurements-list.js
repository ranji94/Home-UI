import React, { useEffect } from 'react'
import { MeasurementStatus } from '../components'
import { useSelector } from 'react-redux'
import styles from './measurements-list.scss'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import BathtubIcon from '@material-ui/icons/Bathtub'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import DateRangeIcon from '@material-ui/icons/DateRange'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import AnnouncementIcon from '@material-ui/icons/Announcement'

export const MeasurementsList = () => {
    const measurements = useSelector((state) => state.measurements.measurements)

    const columns = [
        { item: 'Date', icon: <DateRangeIcon />},
        { item: 'Kitchen readings', icon: <RestaurantIcon />},
        { item: 'Bathroom readings', icon: <BathtubIcon />},
        { item: 'Energy readings', icon: <WbIncandescentIcon />},
        { item: 'Status', icon: <AnnouncementIcon />}
    ]

    const getWaterCell = (readings) => {
        return (<div className={styles['measurement-water-cell']}>
            <div><WhatshotIcon className={styles['hot-icon']} />{readings.hotWater.value.replace('.',',')} m³</div>
            <div><AcUnitIcon className={styles['cold-icon']} />{readings.coldWater.value.replace('.',',')} m³</div>
        </div>)
    }

    return (<div className={styles['measurements-list']}>
        <div className={styles['list-headers']}>
            {columns.map((c) => {
                return <div className={styles['list-header-element']}>
                    {c.icon} {c.item}
                </div>
            })}
        </div>
        {measurements.map((m) => {
                return (<div className={styles['measurements-row']}>
                    <div className={styles['measurement-cell']}>
                        {m.date}
                    </div>
                    {getWaterCell(m.kitchenReadings)}
                    {getWaterCell(m.bathroomReadings)}
                    <div className={styles['measurement-cell']}>
                        <div><FlashOnIcon className={styles['energy-icon']} />{m.energyReading.energyReading.value.replace('.',',')} kWh</div>
                    </div>
                    <div className={styles['measurement-cell']}>
                        <MeasurementStatus status={m.status} />
                    </div>
                </div>)
            })}
    </div>)
}