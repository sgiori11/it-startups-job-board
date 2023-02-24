import milan from '../../public/images/Milan.svg';
import Image from 'next/image';


export default function Footer() {
    return (
        <Image 
            src={milan}
            alt='milano svg'
            style={{ maxWidth: '100%'}}
        />
    )
};