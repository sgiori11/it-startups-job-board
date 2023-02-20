import Image from 'next/image';
import Link from 'next/link';
import SecondaryButton from './SecondaryButton';

export default function NavBar() {
  const handleSecondaryBtnClick = () => {
    alert("Clicked secondary");
  }

    return(
        <div>
          <Image 
            priority 
            src="/images/logo.svg"
            height={20}
            width={20}
            alt="logo"
           />
           <Link href="/pages/about">About</Link>
           <Link href="/pages/contact">Contact</Link>
           <Link href="/pages/startups">Startups</Link>
        </div>
    );
};
