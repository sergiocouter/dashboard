import './Sidebar.css'
import logo from '../../assets/logo.png';


const Sidebar = ( {sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : " "} id='sidebar'>
            <div className="sidebar__tutle">
                <div className="sidebar__img">
                    <img src={logo} alt='Logo do site'/>
                    <h1>Couter Dashboards</h1>
                </div>

                <i onClick={()=> closeSidebar()} 
                className= "fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>

            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link" active_menu_link>
                    <i className="fa fa-minus-square"></i>
                    <a href="https://github.com/sergiocouter">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="https://github.com/sergiocouter">Área administrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="https://github.com/sergiocouter">Área administrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="https://github.com/sergiocouter">Lojas</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="https://github.com/sergiocouter">Produtos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="https://github.com/sergiocouter">Categorias</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cutlery"></i>
                    <a href="https://github.com/sergiocouter">Pedidos</a>
                </div>
                <h2>Pessoas</h2>
                <div className="sidebar__link">
                    <i className="fa fa-male"></i>
                    <a href="https://github.com/sergiocouter">Administradores</a>
                </div>
            </div>
        </div>
    )
}


