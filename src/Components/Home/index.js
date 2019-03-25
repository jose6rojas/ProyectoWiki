import React from 'react';
import '../Style.css';
import developer from '../Pics/developer.png';
import computer from '../Pics/computer.png';
import build from '../Pics/build.png';
import math from '../Pics/math.png';
import book from '../Pics/books3.jpg';
import java from '../Pics/java.jpg';
import ux from '../Pics/UX.png';
import c from '../Pics/c.jpg';
import jav from '../Pics/jav.jpg';
import so from '../Pics/so.jpg';
import sql from '../Pics/sql.jpg';
import nosql from '../Pics/nosql.jpg';
import redes from '../Pics/redes.jpg';
import { withAuthorization } from '../Session';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="margen2">
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
                            <img src={book} className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>ESTUDIA EN CUALQUIER LUGAR..</h1>
                                <h1>Descarga tus clases favoritas y estudia desde la comodidad de tu casa, en camino a la universidad, en la cafeteria o donde tu prefieras.</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <h1>Clases de Desarrollo de Aplicaciones</h1>
                
                <div className="card-group">
                    <div className="card border-primary text-white bg-dark mb-5">
                         <img src={java} width="40" height="40" className="card-img-top centrado" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title centrado">Programación I</h5>
                            <p className="card-text">Abi Alvarado </p>
                         </div>
                    </div>
                    <div className="card border-primary text-white bg-dark mb-5">
                         <img src={ux} width="40" height="40" className="card-img-top centrado" alt="..."/>
                         <div className="card-body">
                            <h5 className="card-title">Experiencia de Usuario</h5>
                            <p className="card-text">José Rojas</p>
                        </div>
                    </div>
                    <div className="card border-primary text-white bg-dark mb-5">
                         <img src={c} width="40" height="40" className="card-img-top centrado" alt="..."/>
                         <div className="card-body">
                            <h5 className="card-title">Programación III</h5>
                            <p className="card-text">Oswal Fuentes</p>
                        </div>
                     </div>
                     <div className="card border-primary text-white bg-dark mb-5">
                         <img src={jav} width="40" height="40" className="card-img-top centrado" alt="..."/>
                         <div className="card-body">
                            <h5 className="card-title">Lab. Programación II</h5>
                            <p className="card-text">Oswal Fuentes</p>
                        </div>
                     </div>
                </div>

                <h1>Clases de Infraestructura</h1>
                
                <div className="card-group">
                    <div className="card border-primary text-white bg-dark mb-5">
                         <img src={so} width="40" height="40" className="card-img-top centrado" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title centrado">Sistemas Operativos I</h5>
                            <p className="card-text">José Rojas</p>
                         </div>
                    </div>
                    <div className="card border-primary text-white bg-dark mb-5">
                         <img src={sql} width="40" height="40" className="card-img-top centrado" alt="..."/>
                         <div className="card-body">
                            <h5 className="card-title">TeorÍa de Base de Datos I</h5>
                            <p className="card-text">Abi Alvarado</p>
                        </div>
                    </div>
                    <div className="card border-primary text-white bg-dark mb-5">
                         <img src={nosql} width="40" height="40" className="card-img-top centrado" alt="..."/>
                         <div className="card-body">
                            <h5 className="card-title">Teoría de Base de Datos II</h5>
                            <p className="card-text">Oswal Fuentes</p>
                        </div>
                     </div>
                     <div className="card border-primary text-white bg-dark mb-5">
                         <img src={redes} width="40" height="40" className="card-img-top centrado" alt="..."/>
                         <div className="card-body">
                            <h5 className="card-title">Redes</h5>
                            <p className="card-text">Oswal Fuentes</p>
                        </div>
                     </div>
                </div>

            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);