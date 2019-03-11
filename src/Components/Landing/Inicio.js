import React from 'react';
import Footer from './Footer.js'
import '../Style.css';
import book from '../Pics/books2.jpg';
import developer from '../Pics/developer.png';
import math from '../Pics/math.png';
import build from '../Pics/build.png';
import computer from '../Pics/computer.png';
import face from '../Pics/happy.png';
import format from '../Pics/format.png';
import note from '../Pics/note.png';
import fav from '../Pics/favorite.png';
import sms from '../Pics/sms.png';


class Inicio extends React.Component{
    render(){
        return(
            <div>
                {/*Imagén de Inicio */}
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                         <div className="carousel-item active">
                            <img src={book} className="d-block w-100"/>
                            <div className="carousel-caption d-none d-md-block">
                                 <h1>YA NO TIENES QUE ESTRESARTE</h1>
                                 <h1>Estudia para tus clases con las notas de estudiantes que las aprobarón y quieren compartir su conocimiento contigo.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                 {/*Información de la página */}
                 <nav>
                 <form>
                    <div className="row">
                        <div className="col">
                        <a className="navbar-brand">
                            <img src={note} width="40" height="40" alt="note" />
                         </a>
                         <p>Aprende con notas de tus clases de carrera, matemáticas, generales, etc.</p> 
                        </div>
                        <div className="col">
                        <a className="navbar-brand">
                            <img src={fav} width="40" height="40" alt="fav" />
                         </a>
                         <p>Guarda las notas que más te gusten para verlas después en tu lista de deseos.</p>
                        </div>
                        <div className="col">
                        <a className="navbar-brand">
                            <img src={sms} width="40" height="40" alt="sms" />
                         </a>
                         <p>Deja una pregunta o contesta alguna publicación en el foro.</p>
                        </div>
                     </div>
                     </form>

                 </nav>
                
                <div className = "margen">
                <form>
                    <div className="form-row">
                        <div className="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={developer} width="30" height="30" alt="Desarrollo"/> Desarrollo de Aplicaciones</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={math} width="30" height="30" alt="Matematicas"/>Matemáticas y Fisicas</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={build} width="30" height="30" alt="Matematicas"/>      Infraestructura</button>
                        </div>
                     </div>
                     <p></p>
                     
                     <div className="form-row">
                        <div className="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={computer} width="30" height="30" alt="Computacion"/> Ciencias de la Computación</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-outline-info btn-lg"> <img src={face} width="30" height="30" alt="Computacion"/>Catedrático: Ing. Elmer</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={format} width="30" height="30" alt="Computacion"/> Formación General</button>
                        </div>
                     </div>
                </form>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Inicio;
