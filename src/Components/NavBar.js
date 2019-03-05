import React from 'react';
import './Style.css';
import image from './books.png';
import categories from './dashboard.png';
import fav from './favorite.png';
import shop from './shop.png';

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline my-2 my-lg-0">                   
                <a className="navbar-brand" href="#">
                    <img src={image} width="50" height="50" alt="ProyectoWiki"/>
                </a>
                <h1>PROYECTO WIKI</h1>
                 </form>
                <button type="button" className="btn btn-outline-info"> <img src={categories} width="30" height="30" alt="Categorias"/>Categorías</button>
                <form className="form-inline my-2 my-lg-0">                   
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar clases.." aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="searchClass">Buscar</button>
                 </form>
                 <form className="form-inline my-2 my-lg-0">                   
                    <button type="button" className="btn btn-outline-info"> <img src={fav} width="30" height="30" alt="Favorito"/></button>
                    <button type="button" className="btn btn-outline-info"> <img src={shop} width="30" height="30" alt="Comprar"/></button>
                 </form>

                 
                </nav>

            </div>

        );
    }

}

export default NavBar;