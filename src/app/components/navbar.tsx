// src/app/components/Navbar.tsx
import Link from 'next/link';
import { Product } from '../../../type';
import { client } from '@/sanity/lib/client';

const Navbar = () => {
    return (
        <ul className='gap-5 font-light hidden md:flex'>
            <Link href={'/categories/newFeatures'}><li>New & Featured</li></Link>
            <Link href='/categories/mensShoes'><li>Men</li></Link>
            <Link href='/categories/womensShoes'><li>Women</li></Link>
            <li>Kids</li>
            <li>Sale</li>
            <li className='font-semibold'>SNKRS</li>
        </ul>
    );
};

export default Navbar;
