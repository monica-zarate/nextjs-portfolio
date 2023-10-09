// Vendor imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Project imports
import Social from "./Social"
import { pagesContent } from '../constants';

export default function Footer() {

    let year = new Date().getFullYear();
    const { acknowledgement } = pagesContent.footer;

    return (
        <div className="bg-lime-950">
            <div className="p-8 pt-16 2xl:px-2 mx-auto max-w-7xl flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
                <div className="mb-8">
                    <p className="text-body">&copy; Monica Zarate {year}</p>
                </div>
                <div className="mb-8">
                    <p className="text-body text-center">Designed and developed with <FontAwesomeIcon icon={faHeart}/> <br/> in Vancouver, BC</p>
                </div>
                <Social isLight />
            </div>
            <div className="px-8 pb-16 2xl:px-2 mx-auto max-w-6xl">
                <span className="text-base text-white font-extralight text-center block">{acknowledgement.span}</span>
            </div>
        </div>
    )
}