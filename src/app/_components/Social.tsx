// Vendor imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Project imports
import { social } from "../constants"


export default function Social() {

    return (
        <ul className='flex'>
            {social.map((__) => (
                <li key={__.id} className='mr-4'>
                    <a href={__.url} target='__blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={__.icon} className='w-auto h-8' style={{color: '#4D7C0F'}}/>
                    </a>
                </li>
            ))}
        </ul>
    )
}