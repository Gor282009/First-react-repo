import "../src/App.css"

function Header() {
    return(
            <header>
                <h1 className="title">OnePage</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">DropDown</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <button className="myBtn">Get Started</button>
                    </ul>
                </nav>
            </header>
    )
}

export default Header