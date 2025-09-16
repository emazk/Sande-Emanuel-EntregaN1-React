import logo from "../img/logo-pizzeria.png"

export const Navbar = () => (
    <>
        <header>
            <nav>

                <div>
                    <img src={logo} alt="logo pizzeria" />
                </div>

                <div>
                    <ul class="navbar bg-body-tertiary">

                        <li>
                            <h2 class="navbar-brand">Pizza Di Sande</h2>
                        </li>

                        <li>
                            <h3>Cat Pizzas</h3>
                        </li>

                        <li>
                            <h3>Cat Empanadas</h3>
                        </li>

                        <li>
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