import'./Head.css'

export const Head = () => {
  return(
    <div className="div">
        <img className='logo' src="./image/logo.png" alt="logo" />
        <div className='text'>
       <span><p className='active'>HOME</p></span>
        <p>LISTINGS</p>
        <p>PROPERTY DETAIL</p>
        <p>AGENTS</p>
        <p>NEWS</p>
        <p>SINGLE POST</p>
         <select className='select' name="" id="">
            <option value="">DROPDOWN</option>
            <option value="Home">HOME</option>
            <option value="Listings">LISTINGS</option>
            <option value="Property details">PROPERTY DETAIL</option>
            <option value="Agents">AGENTS</option>
            <option value="Single post">SINGLE POST</option>
          </select>
        <p>CONTACT</p>
        </div>
    </div>
  );  
};