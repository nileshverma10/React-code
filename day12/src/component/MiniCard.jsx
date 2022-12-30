import './MiniCard.css'
import {BsFunnel} from 'react-icons/bs'
import {HiOutlineMinus} from 'react-icons/hi'
export const MiniCard = () => {
    return(
        <>
        <div className="mini">
         <div className='minic'>
            <h5 className='color'>Unlimited Colors</h5>
            <p className='fully'>fully customizable</p>
            <div className='border minic'>
            <BsFunnel className='funnel'/>
            </div>
             <HiOutlineMinus className='minus'/>
             <h5 className='read'> +READ MORE</h5>
         </div>
        </div>
        </>
    );
};