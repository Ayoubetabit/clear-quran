import '../../css/navbar.css';
export default function Navbar(){
    return <div className="navbar">
        <span className="logo">
            Clear Quran
        </span>
        <ul className="navbar-links">
            <li> <a href="#" target="_blank" rel="noopener noreferrer">Home</a> </li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">About</a> </li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Audio</a> </li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Blog</a> </li>
        </ul>
        <a className="sign-up" href="#">
            Sign up
        </a>
    </div>
} 