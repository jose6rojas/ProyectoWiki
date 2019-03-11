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

                <h1>CATEGORÍAS PRINCIPALES</h1>
                <div>
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
