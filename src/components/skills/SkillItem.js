import { BsPatchCheckFill } from 'react-icons/bs'

import './skills.css'

const SkillsItem = ({ title, description }) => {
    return (
        <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon' />
            <div>
                <h4>{title}</h4>
                <small className='text-light'>{description}</small>
            </div>
        </article>

    )
}

export default SkillsItem;