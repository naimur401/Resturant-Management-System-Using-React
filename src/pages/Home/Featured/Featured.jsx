
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'
const Featured = () => {
    return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
        <SectionTittle
        
        subheading="check it out" heading="Featured Item"
        
        >


        </SectionTittle>
        <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20, 2029</p>
                <p className='uppercase'>where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, corporis consectetur dolorum laborum delectus ullam?</p>
                <button  className='btn btn-outline border-0 border-b-4'>Order Now</button>
            </div>
        </div>
    </div>

    );
};

export default Featured;