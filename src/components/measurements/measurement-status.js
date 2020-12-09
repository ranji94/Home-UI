import React from 'react'
import sty from './measurement-status.scss'
import MailRoundedIcon from '@material-ui/icons/MailRounded'
import AssignmentReturnedRoundedIcon from '@material-ui/icons/AssignmentReturnedRounded'
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded'

export const MeasurementStatus = ({ status }) => {
    const MEASUREMENT_STATUS = {
        WAITING_FOR_SEND: {icon: <MailRoundedIcon />, style: 'waiting-for-send'},
        WAITING_FOR_SETTLEMENT: {icon: <AssignmentReturnedRoundedIcon />, style: 'waiting-for-settlement'},
        NOT_PAID: {icon: <PaymentRoundedIcon />, style: 'not-paid'},
        PAID: {icon: <PaymentRoundedIcon />, style: 'paid' }
    }

    return <div className={sty[MEASUREMENT_STATUS[status].style]}>
        {MEASUREMENT_STATUS[status].icon}
    </div>
}