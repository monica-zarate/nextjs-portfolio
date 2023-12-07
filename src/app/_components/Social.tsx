// Vendor imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Project imports
import { social } from "../constants"


export default function Social(props: any) {
    return (
        <ul className="flex">
            {social.map((__, i) => (
                <li key={__.id} className={`${i === social.length - 1 ? "" : "mr-4"} duration-75 ease-in-out`}>
                    <a href={__.url} target="__blank" rel="noreferrer" title={__.title}>
                        <FontAwesomeIcon icon={__.icon} className={`${props.isSmall ? "h-6 text-gray-400 hover:text-gray-500" : "h-8 text-gray-600 hover:text-gray-900"} w-auto`}/>
                    </a>
                </li>
            ))}
        </ul>
    )
}