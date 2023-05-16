import './Navbar.css'
import Avatar from '../../assets/avatar.png'


const Navbar = ({ sidebarOpen, openSidebar }) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="https://">Produtos</a>
                <a href="https://">Usuários</a>
                <a href="https://" className="active_link">Admin</a>
            </div>

            <div className="navbar__right">
                <a href="https://">
                    <i className="fa fa-search"></i>
                </a>
                <a href="https://">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="https://">
                    <img width="30" src={Avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar