import'./Cardc.css'
export const Cardc = (props) =>{
    return(
        <div className="card">
            <div className='minicard'>
                <img className='ttt' src={props.wall} alt="house" />   
                <h4 className='summer'>{props.text2}</h4>
                <div className='text11'>
                <p>500sq.ft</p>
                <p>2 Bathrooms</p>
                <p>2 Bed Rooms</p>
                 {/* <button><a href="https://react-bootstrap.github.io/components/carousel/">Watch</a></button> */}
                </div>
                <hr/>
            </div>
        </div>
    )
}