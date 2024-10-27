import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import K from "./Constant";

const Offers = () => {
    return (
        <div>
            <div><h1 className='flex justify-center text-[30px] font-semibold font-mono'>MY SKILLS</h1></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto my-24] mt-0'>

                {
                    K.OFFERS.map((offer, index) => {
                        console.log(`${index}: ${offer.text}`);
                        return (
                            <div className='relative bg-white rounded-lg shadow-lg p-6 flex flex-col gap-y-4 overflow-hidden transition-all duration-300 ease-in-out group'>
                                {/* Hover effect overlay */}
                                <div className='absolute inset-0 bg-pink-700 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0' />
                                <span className='p-3 bg-[#242424] w-fit text-white text-xl rounded-full z-10'>
                                    <FontAwesomeIcon icon={offer.icon} />
                                </span>
                                <h3 className='text-2xl font-semibold z-10'>{offer.text}</h3>
                                <p className='text-gray-700 z-10'>{offer.description}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>


    )
};

export default Offers