'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchProduct = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const router = useRouter();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            router.push(`/search/${encodeURIComponent(trimmedValue)}`); 
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex gap-1 bg-[#cccccc] p-1 rounded-full'>
                <Image src='/search.png' alt='search' width={40} height={36}></Image>
                <input
                    type='text'
                    placeholder='Search'
                    value={inputValue}
                    onChange={handleSearch}
                    className='bg-transparent border-none outline-none'
                />
            </form>
        </div>
    );
};

export default SearchProduct;
