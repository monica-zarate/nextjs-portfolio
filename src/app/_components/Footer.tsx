// Vendor imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Project imports
import Social from "./Social";

export default function Footer() {

    let year = new Date().getFullYear();

    return (
        <div className="bg-lime-950">
            <div className="px-8 py-16 2xl:px-2 mx-auto max-w-7xl flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
                <div className="mb-8">
                    <p className="text-body">&copy; Monica Zarate {year}</p>
                </div>
                <div className="mb-8">
                    <p className="text-body text-center">Designed and developed with <FontAwesomeIcon icon={faHeart}/> <br/> in Vancouver, BC</p>
                </div>
                <Social isLight />
            </div>
        </div>
    )
}