import Image from 'next/image';
import footer from '../../app/assets/images/footer.png';

const PublicFooter = () => {
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <Image src={footer} alt="Footer" className="w-full " />
            <div>
                <p className='p-3 text-center'>© 2024 Kicks. All rights reserved.</p>
            </div>
        </div>
    );
};

export default PublicFooter;