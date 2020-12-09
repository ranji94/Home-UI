import React from 'react'
import styles from './measurements.scss'
import PostAddIcon from '@material-ui/icons/PostAdd'
import SyncIcon from '@material-ui/icons/Sync'

export const MeasurementsPanel = ({ fetchMeasurements }) => {
    return (<div className={styles['measurements-panel']}>
        <div className={styles['measurements-refresh']}>
            <div onClick={fetchMeasurements} className={styles['refresh-button']}>
                <SyncIcon />
            </div>
        </div>
    <div className={styles['measurements-add-button-container']}>
        <div className={styles['measurement-add-button']} onClick={fetchMeasurements} >
            <span className={styles['measurement-add-button-text']}>
                Add new measurement
            </span>
            <PostAddIcon />
        </div>
    </div>
</div>)
}