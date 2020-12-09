export const API = {
    GET_TEMPLATE: { url: 'api/mail/getTemplate', method: 'GET' },
    SEND_LAST_READINGS: { url: 'api/mail/sendLastReadings', method: 'POST' },
    MAIL_UPDATE: { url: 'api/mail/update', method: 'POST' },
    SET_DB_CREDENTIALS: { url: 'api/maintenance/setDbCredentials', method: 'POST' },
    MEASUREMENT_ADD: { url: 'api/measurement/add', method: 'POST', timeout: 2 * 60 * 1000 },
    MEASUREMENT_GET_ALL: { url: 'api/measurement/getAll', method: 'GET', timeout: 1 * 60 * 1000 },
    MEASUREMENT_GET_BY_ID: { url: 'api/measurement/getById', method: 'GET', timeout: 2 * 60 * 1000 },
    CHECK_DIR: { url: 'api/measurement/updateStatus', method: 'GET' }
}