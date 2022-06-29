import { BsPatchCheckFill } from 'react-icons/bs'

import './experience.css'

const ExperienceItem = ({ title, description }) => {
    return (
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>{title}</h4>
                <small className='text-light'>{description}</small>
            </div>
        </article>

    )
}

export default ExperienceItem;