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
                        <FontAwesomeIcon icon={__.icon} className={`${props.isLight ? "text-white" : "text-gray-600 hover:text-lime-600"} w-auto h-8`}/>
                    </a>
                </li>
            ))}
        </ul>
    )
}