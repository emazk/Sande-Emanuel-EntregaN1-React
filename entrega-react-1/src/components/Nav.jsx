import logo from "../img/logo-pizzeria.png"
import "./Nav.css"

export const Navbar = () => (
    <>
        <header>
            <nav className="nav">
                <div className="container">
                    <div>
                        <a href="https://unsplash.com/es/fotos/gatito-atigrado-marron-sentado-en-el-suelo-nKC772R_qog"><img className="logo" src={logo} alt="logo pizzeria" /></a>
                    </div>

                    <ul class="navbar bg-body-tertiary" className="container">

                        <li className="lista">
                            <a className="links" href="https://unsplash.com/es/fotos/gatito-blanco-y-gris-sobre-textil-blanco-so5nsYDOdxw"><h3>Cat Pizzas</h3></a>
                        </li>

                        <li className="lista">
                            <a className="links" href="https://unsplash.com/es/fotos/gatito-atigrado-plateado-en-el-suelo-7AIDE8PrvA0"><h3>Cat Empanadas</h3></a>
                        </li>

                        <li className="lista">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" />
                                <button class="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        </header></>
)