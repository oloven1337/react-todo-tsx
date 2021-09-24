import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()

    const handlerBackBtn = () => history.push('/')

    return (
        <>
            <h1>Страница информации</h1>
            <p>Просто список задач</p>
            <button className='btn' onClick={handlerBackBtn}>Обратно к списку дел</button>
        </>
    )
}
