import React from 'react'
import EmailButton from '../SendEmailButton'

function NoGarantias() {
    return (
        <form>
            <h4>No Garantias</h4>
            <iframe
                className="square"
                src='https://es.surveymonkey.com/r/QHDLQXV'></iframe>
            <br></br>
            <br></br>
            <EmailButton></EmailButton>
        </form>
    );
}
export default NoGarantias;