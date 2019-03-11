import React from 'react';
import '../Style.css';
import Navbar from "./NavbarHome";
import developer from '../Pics/developer.png';
import computer from '../Pics/computer.png';
import build from '../Pics/build.png';
import math from '../Pics/math.png';
import book from '../Pics/books3.jpg';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className = "margen2">
                <nav>
                    <form>
                    <div className="row">
                        <div className="col">
                        <a className="navbar-brand">
                            <img src={developer} width="40" height="40" alt="developer" />
                         </a>
                         <a href="">Desarrollo de Aplicaciones</a> 
                        </div>
                        <div className="col">
                        <a className="navbar-brand">
                            <img src={computer} width="40" height="40" alt="computer" />
                         </a>
                         <a href="">Ciencias de la Computación</a>
                        </div>
                        <div className="col">
                        <a className="navbar-brand">
                            <img src={build} width="40" height="40" alt="build" />
                         </a>
                         <a href="">Infraestructura</a>
                        </div>
                        <div className="col">
                        <a className="navbar-brand">
                            <img src={math} width="40" height="40" alt="math" />
                         </a>
                         <a href="">Matemáticas y Físicas</a>
                        </div>
                     </div>
                     </form>
                </nav>
                </div>

                {/*Imagén de Inicio */}
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                         <div className="carousel-item active">
                            <img src={book} className="d-block w-100"/>
                            <div className="carousel-caption d-none d-md-block">
                                 <h1>ESTUDIA EN CUALQUIER LUGAR..</h1>
                                 <h1>Descarga tus clases favoritas y estudia desde la comodidad de tu casa, en camino a la universidad, en la cafeteria o donde tu prefieras.</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;