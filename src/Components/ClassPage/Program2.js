import React from 'react';
import '../Style.css';

class Program2 extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <h2>Desarrollo de Aplicaciones</h2>
                    <div class="row border border-primary">
                        <div class="col-sm-10">
                            <h1 margen2>Programación 2</h1>
                            <h3 margen2>Usuario: José Rojas </h3>
                            <h3 margen2>Fecha: Trimestre 2, 2016 </h3>
                            <h3 margen2>Docente: Laura Cabrera </h3>
                            <h4 margen>Contenido</h4>>
                            <p>Semana 1<br />
                                Repaso de Programación 1<br />
                                &emsp;a. Estructuras de control, lectura/escritura, random<br />
                                &emsp;&emsp;• Estructuras de control: Son instrucciones que definen el comportamiento del programa.<br />
                                &emsp;&emsp;&emsp;- if<br />
                                &emsp;&emsp;&emsp;- switch<br />
                                &emsp;&emsp;&emsp;- operador condicional<br />
                                &emsp;&emsp;&emsp;&emsp; ~ Ejemplo: String a = 5 > x ? "hola" : "adiós";<br />
                                &emsp;• Bucles: Bloques de código que son repetitivos.<br />
                                &emsp;&emsp;&emsp;- while<br />
                                &emsp;&emsp;&emsp; - do while<br />
                                &emsp;&emsp;&emsp;&emsp; ~ Se ejecuta por lo menos una vez.<br />
                                &emsp;&emsp;&emsp;- for<br />
                                &emsp;&emsp;&emsp;&emsp;~ El tope en el for ya está establecido, mientras que en el while puede continuar.<br />
                                &emsp;b. Métodos<br />
                                &emsp;c. Recursivas<br />
                                &emsp;&emsp;• Son métodos que tiene 3 características especiales:<br />
                                &emsp;&emsp;&emsp;- Tienen un caso base.<br />
                                &emsp;&emsp;&emsp;- Se llaman a sí mismas.<br />
                                &emsp;&emsp;&emsp;- Forman un stack en la memoria al momento de ser llamadas.<br />
                                &emsp;d. Arreglos<br />
                                &emsp;e. Matrices<br />
                                &emsp;f. Creación de ejecutables<br />
                                Colecciones<br />
                                &emsp;a. ArrayList<br />
                                &emsp;&emsp;• Es un tipo predefinido en Java con el objetivo de facilitar el manejo de los arreglos.<br />
                                &emsp;&emsp;• Contiene métodos predefinidos para:<br />
                                &emsp;&emsp;&emsp;- Agregar<br />
                                &emsp;&emsp;&emsp;- Ordenar<br />
                                &emsp;&emsp;&emsp;- Modificar<br />
                                &emsp;&emsp;&emsp;- Eliminar<br />
                                <br />
                                Semana 2<br />
                                Programación Orientada a Objetos (POO)<br />
                                &emsp;• Metodología de programación basada en 4 pilares/una forma distinta de programar.<br />
                                &emsp;a. Clases<br />
                                &emsp;&emsp;• Un nuevo tipo de datos constituido por los siguientes elementos:<br />
                                &emsp;&emsp;&emsp;- Atributos: Las características que definen al nuevo tipo de datos. Representadas por variables.<br />
                                &emsp;&emsp;&emsp;&emsp;~ Clase simple: Cuando todos sus atributos son primitivos.<br />
                                &emsp;&emsp;&emsp;&emsp;~ Clase compuesta: Cuando un atributo es un nuevo tipo de datos.<br />
                                &emsp;&emsp;&emsp;- Constructores: Un método que tiene 3 características especiales:<br />
                                &emsp;&emsp;• Tiene el mismo nombre de la clase.<br />
                                &emsp;&emsp;• No retorna nada.<br />
                                &emsp;&emsp;• Se encarga de reservar el bloque de memoria para los atributos.<br />
                                &emsp;&emsp;&emsp;– Mutadores: Métodos que se encargan de leer o escribir la información contenida en memoria de los<br />
                                atributos del nuevo tipo de datos.<br />
                                &emsp;&emsp;&emsp;- Métodos de administración: Métodos que definen el comportamiento del nuevo tipo de datos.<br />
                                &emsp;b. Visibilidad<br />
                                &emsp;&emsp;• Encapsulamiento: Es definir el nivel de acceso de los datos del nuevo tipo de datos.<br />
                                &emsp;&emsp;&emsp;- private: El bloque de memoria solo puede ser accedido por sus elementos miembros.<br />
                                &emsp;&emsp;&emsp;- protected: El bloque de memoria solo puede ser accerdido por sus elementos miembros y por los
                                elementos miembros de sus clases heredadas.<br />
                                &emsp;&emsp;&emsp;- package: El bloque de memoria puede ser accedido por elementos de cualquier clase que se
                                encuentre en el mismo paquete.<br />
                                &emsp;&emsp;&emsp; - public: Cualquiera puede acceder al bloque de memoria de la clase.<br />
                                &emsp;c. Instancias<br />
                                &emsp;d. Sobrecarga de métodos<br />
                                <br />
                                Semana 3<br />
                                Programación Orientada a Objetos (POO)<br />
                                &emsp;a. Aplicaciones prácticas de la Programación Orientada a Objetos<br />
                                &emsp;b. Aplicaciones para estructuras de datos<br />
                                &emsp;c. Tipos enumerados<br />
                                &emsp;d. Tipos genéricos<br />
                                &emsp;e. Subclases<br />
                            </p>
                        </div>
                        <h4 margen> </h4>
                    </div>
                </form>
            </div>
        );
    }
}

export default Program2;