// import "../Header/Header.css"

// const Header = () =>
//  {
// return(
//     <header className="header">
    
//     <h1 className="header__title">Weather App</h1>
 
     
    
//   </header>


// );
  




//  }

//  export default Header;
import React from 'react';

function Header({location, setLocation}) {
  const handleSearch = event => {
    event.preventDefault();
    setLocation(location);
    // fetch data using location here
  };

  return (
    <>
  
  
   </>
  );
}

export default Header;
