import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>This is NavBar</h1>
            <div className="links">
                <Link href="/">HOME</Link>
                <Link href="/create" style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "8px"
                }}>NEW BLOG</Link>
            </div>
        </nav>
    );
}

export default Navbar;