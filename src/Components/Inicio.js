import React from 'react';
import './Style.css';
import book from './books2.jpg';
import developer from './developer.png';
import math from './math.png';
import build from './build.png';
import computer from './computer.png';
import face from './happy.png';
import format from './format.png';

class Inicio extends React.Component{
    render(){
        return(
            <div>
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
                <form>
                    <div class="form-row">
                        <div class="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={developer} width="30" height="30" alt="Desarrollo"/> Desarrollo de Aplicaciones</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={math} width="30" height="30" alt="Matematicas"/>Matemáticas y Fisicas</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={build} width="30" height="30" alt="Matematicas"/>      Infraestructura</button>
                        </div>
                     </div>
                     <p></p>
                     
                     <div class="form-row">
                        <div class="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={computer} width="30" height="30" alt="Computacion"/> Ciencias de la Computación</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn btn-outline-info btn-lg"> <img src={face} width="30" height="30" alt="Computacion"/>Catedrático: Ing. Elmer</button>
                        </div>
                        <div class="col">
                            <button type="button" className="btn btn-outline-info btn-lg"><img src={format} width="30" height="30" alt="Computacion"/> Formación General</button>
                        </div>
                     </div>
                </form>
            </div>
        );
    }
}
export default Inicio;
