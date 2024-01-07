import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function ThemeButton(prop){
  function changeTheme(){
    prop.func(prop.id); 
    
    
  }
  return (
    <div className={"w-7 h-7 rounded-full cursor-pointer ml-2"} style={{backgroundColor:prop.bgColor}} onClick={changeTheme}>
    </div>
  )
}

export default function Navbar(prop){ 
  return (
    <nav className="navbar navbar-expand-lg" style={{color:prop.styleTheme.color, backgroundColor:prop.styleTheme.textAreaBg}}>
        <Link className="navbar-brand" to="/">{prop.company}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto flex align-center gap-2 justify-center">
            <li className="nav-item active">
              <Link className="nav-a " to="/" style={{ textDecoration: 'none' }}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a " to="/About" style={{ textDecoration: 'none' }}>About</Link>
            </li>
          </ul>
          <ThemeButton bgColor={prop.styleTheme.id===1 ? "white" : "#02536e"} id={prop.styleTheme.id===1 ? "0" : "1"} func={prop.function}/>
          <ThemeButton bgColor={prop.styleTheme.id===2 ? "white" : "#7b08a6"} id={prop.styleTheme.id===2 ? "0" : "2"} func={prop.function}/>
          <ThemeButton bgColor={prop.styleTheme.id===3 ? "white" : "#bc390f"} id={prop.styleTheme.id===3 ? "0" : "3"} func={prop.function}/>
        </div>
    </nav>  
  )
}

Navbar.propTypes = {
    company: PropTypes.string
}

Navbar.defaultProps = {
    company: "XYZ"
}
