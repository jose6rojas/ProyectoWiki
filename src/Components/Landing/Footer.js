import React from 'react';
import '../Style.css';
import image from '../Pics/books.png';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className = "footer">
                <nav className="navbar navbar-dark bg-dark navbar-expand-xl">
                    <form className="form-inline my-2 my-lg-0">
                        <a className="navbar-brand">
                            <img src={image} width="40" height="40" alt="ProyectoWiki" />
                        </a>
                    </form>
                    <form>
                    <div className="row">
                        <div className="col">
                             <h4>Proyecto Wiki</h4>
                        </div>
                        <div className="col">
                             <p>Derechos de Autor© Proyecto Wiki, Inc</p>
                        </div>
                         <div className="col">
                            <a href="">Condiciones</a>
                         </div>
                         <div className="col">
                            <a href="">Política de Privacidad y Política de Uso</a>
                         </div>
                     </div>
                   </form>
                </nav>
                </div>
            </div>
        );
    }
}

export default Footer;