import { Link } from "react-router";
export default function Footer() {
    return (
        <footer className='bg-sky-400 text-black'>
            <ul>
                <li>
                    <Link to="/" className='text-blue-500'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='text-blue-500'>About</Link>
                </li>
                <li>
                    <Link to="/contact" className='text-blue-500'>Contact</Link>
                </li>
                <li>
                    <Link to="/events" className='text-blue-500'>Events</Link>
                </li>
                <li>
                    <Link to="/register" className='text-blue-500'>Register</Link>
                </li>
            </ul>
        </footer>
    )

}