const Navbar = () => {
    return (
        <div>
            <ul className='nav-ul'>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>   
        </div>
    )
}

/*
<li><h4>Hello</h4></li>
                <li><h4>This</h4></li>
                <li><h4>Is A</h4></li>
                <li><h4>Navbar</h4></li>
*/

// only ul will be part of the navbar, the <li>s will be buttons

// navbar needs:
// searchbar for google which only returns results from this site
// buttons to navigate to other pages within the site

export default Navbar
