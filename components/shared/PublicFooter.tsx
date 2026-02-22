"use client";
import Image from 'next/image';
import footer from '../../app/assets/images/footer.png';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PublicFooter = () => {

    useEffect(() => {
            Aos.init({
                duration: 1000, // animation duration in ms
                once: true,     // whether animation should happen only once
            });
        }, []);
    return (
        <footer data-aos="fade-up" className='max-w-7xl mx-auto p-4 mt-10 md:mt-20'>
            <Image src={footer} alt="Footer" className="w-full " />
            <div>
                <p className='p-3 text-center'>© 2024 Kicks. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default PublicFooter;