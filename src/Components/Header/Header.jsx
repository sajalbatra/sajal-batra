import "./header.css"
const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <p>Sajal Batra</p>
        </div>
        <div className='header-right'>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Resume</p>
            <p className="header-right-last-element">Contact Me</p>
        </div>
    </div>
  )
}

export default Header