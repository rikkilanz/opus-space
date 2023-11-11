import Image from 'next/image'
import {brandLogoSymbolWhite} from '../assets/images/index'

export default function CTACarouselSlider() {
  return (
    <div>
      <ul>
        <li>
            <Image src={brandLogoSymbolWhite} className='h-2 w-2' />
        </li>
      </ul>
    </div>
  );
}
