import React from 'react';
import '../Style.css';
import image from '../Pics/books.png';
import categories from '../Pics/dashboard.png';
import fav from '../Pics/favorite.png';
import shop from '../Pics/shop.png';
import * as ROUTES from '../../constants/routes';
import SignOutItem from '../SignOut';
import { AuthUserContext } from '../Session';

const NavbarPage = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <div>
        <nav className="navbar navbar-dark bg-dark border border-light">
            <form className="form-inline my-2 my-lg-0">
                <a className="navbar-brand">
                    <img src={image} width="50" height="50" alt="ProyectoWiki" />
                </a>
                <h4>Proyecto Wiki</h4>
            </form>
            <button type="button" className="btn btn-outline-info"> <img src={categories} width="30" height="30" alt="Categorias" />Categorías</button>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar clases.." aria-label="Search" />
                <button className="btn btn-outline-info my-2 my-sm-0" type="searchClass">Buscar</button>
            </form>
            <form>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-outline-info"> <img src={fav} width="30" height="30" alt="Favorito" /></button>
                    </div>
                </div>
            </form>
            <form>
                <div className="row">
                    <div className="col">
                        <p>¡Bienvenido, Usuario!</p>
                    </div>
                    <div className="col">
                        <SignOutItem></SignOutItem>
                    </div>
                </div>
            </form>
        </nav>
    </div>
);

const NavigationNonAuth = () => (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <form className="form-inline my-2 my-lg-0">
                <a className="navbar-brand" href={ROUTES.LANDING}>
                    <img src={image} width="50" height="50" alt="ProyectoWiki" />
                </a>
                <h1>PROYECTO WIKI</h1>
            </form>
            <button type="button" className="btn btn-outline-info"> <img src={categories} width="30" height="30" alt="Categorias" />Categorías</button>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar clases.." aria-label="Search" />
                <button className="btn btn-outline-info my-2 my-sm-0" type="searchClass">Buscar</button>
            </form>

            <form>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-outline-info"> <img src={fav} width="30" height="30" alt="Favorito" /></button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-outline-info"> <img src={shop} width="30" height="30" alt="Comprar" /></button>
                    </div>
                </div>
            </form>

            <form>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-outline-info" onClick={() => login()}>Log In</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-outline-info" onClick={() => signup()}>Registrate</button>
                    </div>
                </div>
            </form>
        </nav>
    </div>
);

function login() {
    window.location = ROUTES.SIGN_IN;
}

function signup() {
    window.location = ROUTES.SIGN_UP;
}

export default NavbarPage;