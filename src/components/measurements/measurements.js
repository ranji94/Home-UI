import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MeasurementsPanel, MeasurementsList } from '../components'
import { fetch } from '../../operations'
import { API } from '../../constants'
import { setFetchSuccess, setMeasurements } from '../../redux/actions'
import styles from './measurements.scss'

export const Measurements = () => {
    const dispatch = useDispatch()

    const fetchMeasurements = () => {
        dispatch(setFetchSuccess(false))
        fetch(API.MEASUREMENT_GET_ALL).then((response) => {
            dispatch(setFetchSuccess(true))
            dispatch(setMeasurements(response.data))
            console.log(response.data)
        }).catch(() => {
            dispatch(setFetchSuccess(true))
        })
    }

    return <main>
        <div className={styles['measurements-container']}>
            <div className={styles['measurements-title']}>
                Measurements
            </div>
            <MeasurementsPanel {...{ fetchMeasurements }} />
            <MeasurementsList />
        </div>
    </main>
}