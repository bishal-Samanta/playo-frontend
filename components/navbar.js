function navbar(){
    return `<div id="navbar">
                <a id="active" href="index.html">
                    <img id="logo" src="https://playo-website.gumlet.net/logo/playo-logo-header-website.png?auto=compress,format&amp;q=90" alt="">
                </a>

                <ul id="nav_options">
                    <li><a href="../htmls/venues.html"><span class="link-btn">Book Venues</span></a></li>
                    <li><a href="./htmls/activities.html"><span class="link-btn">Activites</span></a></li>
                    <li><a href="./htmls/blog.html"><span class="link-btn">Blog</span></a></li>
                </ul>
            </div>`;
}

export default navbar;