// Vendor imports
import Image from 'next/image';
import { caveat } from "../fonts";

// Project imports
import { monicaProfilePhoto } from '../../assets';
import Social from './Social';

export default function Intro() {

    return (
        <div className='bg-white py-8 px-4'>
            <div className='flex justify-center items-center max-auto mb-8'>
                <Image alt='this' src={monicaProfilePhoto} className='rounded-full w-1/2 mr-2'/>
                <p className={`${caveat.className} text-amber-500 text-h2 ml-2`}>Monica</p>
            </div>
            <div>
                <p className='text-body text-lime-950 mb-4'>I'm a Vancouver BC-based Web Designer and Developer who values inclusion, accessibility and agile work.</p>
                <p className='text-body text-lime-950 mb-4'>Let's work together!</p>
                <Social/>
            </div>
        </div>
    )
}