const topHeaderContents =
`<div class="container row">
    <div class="topElement col col-auto">
        <i class="fa fa-phone"></i>
        <div class="content"><span class="code">+966</span><span class="number">56 321 5698</span></div>
    </div>
    <div class="topElement col col-auto">
        <i class="fa fa-mobile"></i>
        <div class="content"><span class="code">+966</span><span class="number">56 321 5698</span></div>
    </div>
    <div class="topElement col col-auto">
        <i class="fa fa-at"></i>
        <div class="content"><span class="code">sales@aaa-stores.com</span></div>
    </div>
    <div class="topElement col col-auto">
        <i class="fa fa-at"></i>
        <div class="content"><span class="code">sales@aaa-stores.com</span></div>
    </div>
</div>`;
const mainHeaderContents = 
`
<div class="container">
    <div class="header-contents">
        <div class="brand">
            <a href="/index.html"><i class="fas fa-shopping-cart"></i> Cart </a>
        </div>

        <nav>
            <a id="products" class="d-inline-block" href="/app/products/index.html"><i class="fas fa-tags"></i> Products </a>
            <a id="signupBtn" class="" href="/app/user/register.html"><i class="fas fa-sigout"></i> Signup </a>
            
            <a id="signinBtn" class="" href="/app/user/login.html"><i class="fas fa-cash-register"></i> Login </a>
            
            <div id="userMenuBtn" class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul id="userNav" class="dropdown-menu">
                    <li><a href=""><i class="far fa-user-circle"></i> Profile</a></li>
                    <li><a href=""><i class="far fa-heart"></i> Favourites</a></li>
                    <li><a href=""><i class="fas fa-shield-alt"></i> Orders</a></li>
                    <li><a href=""><i class="fas fa-dolly"></i> Cart</a></li>
                    <li><a href=""><i class="fas fa-truck-moving"></i> Track Order</a></li>
                    <li><a href="/cpanel/index.html"><i class="fa fa-cogs"></i>CPanel</a></li>
                    <li><a id="signout" href="/app/user/signout.html"><i class="fas fa-sign-out-alt"></i> Sign Out</a></li>
                </ul>
                </div>
            
                
        </nav>
    </div>
</div>
`;
