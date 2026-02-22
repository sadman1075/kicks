import Image from 'next/image';
import footer from '../../app/assets/images/footer.png';

const PublicFooter = () => {
    return (
        <footer className='max-w-7xl mx-auto p-4 mt-10 md:mt-20'>
            <Image src={footer} alt="Footer" className="w-full " />
            <div>
                <p className='p-3 text-center'>© 2024 Kicks. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default PublicFooter;