// Vendor imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Project imports
import { social } from "../constants"


export default function Social(props: any) {
    return (
        <ul className="flex">
            {social.map((link, i) => (
                <li key={link.id} className={`${i === social.length - 1 ? "" : "mr-4"} duration-75 ease-in-out`}>
                    <a href={link.url} target="_blank" rel="noreferrer" title={link.title}>
                        <FontAwesomeIcon icon={link.icon} className={`${props.isSmall ? "h-6 text-gray-400 hover:text-gray-500" : "h-8 text-gray-600 hover:text-gray-900"} w-auto`}/>
                    </a>
                </li>
            ))}
        </ul>
    )
}