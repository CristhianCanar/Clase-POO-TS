/**
 * Sistema de gestion de estudiantes con POO
 * Clase estudiante
 * 
 * contiene los atributos:
 * un id(representa un identificador unico del estudiante en el sistema)
 * nombre
 * edad
 * un arreglo de las calificaciones del estudiante que son privadas
 * 
 * Contiene los metodos:
 * Un metodo para agregar calificaciones
 * Un metodo para calcular el promedio de las calificaciones del estudiante
 * 
 * Clase GestorEstudiante
 * Contiene los atributos:
 *  Lista de estudiantes de tipo privada
 * 
 * Metodos:
 *  Un metodo para agregar estudiante
 *  Un metodo para obtener el estudiante por ID
 *  Un metodo para eliminar un estudiante de la lista de estudiante por ID
 *  Un metodo para calcular y devolver el promedio de calificaciones de todos los estudiantes
 *   del sistema.
 * 
 * Una vez definidas las clases, crear dos instancias de la clase estudiante (crear dos estudiantes)
 * Donde el primer estudiante tiene las notas de 85, 90
 * Y el segundo estudiante tiene las notas de 78, 88
 * 
 * Luego debe agregar los dos estudiantes al listado general y debe obtener
 * El promedio de cada estudiante y el promedio general de todos los estudiantes
 */

class Estudiante {
    public id: number;
    public nombre: string;
    public edad: string;
    private calificaciones: number[] = [];

    constructor(
        id: number,
        nombre: string,
        edad: string
    ) {
        this.id = id
        this.nombre = nombre
        this.edad = edad
    }

    public agregarCalificacion(nota:number) {
        this.calificaciones.push(nota);
    }

    // Calcular promedio: (suma de los elementos) / # de elementos
    public obtenerPromedioCalificaciones():number{
        let promedio = 0
        let total = 0
        // i++ igual a i = i+1
        for(var i = 0; i < this.calificaciones.length; i++){
            //total = total + this.calificaciones[i]
            total += this.calificaciones[i]
            
        }
        // return this.calificaciones.length != 0 ? total / this.calificaciones.length : 0
        // Condicion implicita (ternario)
        promedio = this.calificaciones.length != 0 ? total / this.calificaciones.length : 0
        return promedio
    }
}

class GestorEstudiante {
    private estudiantes: Estudiante[] = [];

    public agregarEstudiante(estudiante: Estudiante){
        this.estudiantes.push(estudiante);
    }

    public obtenerEstudiantePorId(id: number): Estudiante | undefined{
        // Primera forma
        /* const busqueda = this.estudiantes.find(estBusqueda => estBusqueda.id === id)
        return busqueda */
        // Segunda forma (menos eficiente)
        /* let busqueda:Estudiante | undefined
        for(var i = 0; i <= this.estudiantes.length; i++){
            let estudiante = this.estudiantes[i]
            if (estudiante.id === id) {
                busqueda = estudiante
                }
        }
        return busqueda */
        return this.estudiantes.find(estBusqueda => estBusqueda.id === id)
    }

    public eliminarEstudiantePorId(id: number) {
        this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== id);
    }

    public obtenerPromedioGeneralEstudiantes(): number{
        let promedioGeneral = 0
        let total = 0
        for(var i = 0; i < this.estudiantes.length; i++){
            total += this.estudiantes[i].obtenerPromedioCalificaciones();
        }
        promedioGeneral = this.estudiantes.length != 0 ? total / this.estudiantes.length : 0;
        return promedioGeneral
    }
}

// Uso de las clases
const estudianteUno = new Estudiante(1, "Juan", "20");
const estudianteDos = new Estudiante(2, "Alice", "25");

estudianteUno.agregarCalificacion(85)
estudianteUno.agregarCalificacion(90)

estudianteDos.agregarCalificacion(78)
estudianteDos.agregarCalificacion(88)

const gestorEstudiantes = new GestorEstudiante();

gestorEstudiantes.agregarEstudiante(estudianteUno);
gestorEstudiantes.agregarEstudiante(estudianteDos);

console.log(`El promedio del estudiante ${estudianteUno.nombre} es de: ${estudianteUno.obtenerPromedioCalificaciones()}`);
console.log(`El promedio del estudiante ${estudianteDos.nombre} es de: ${estudianteDos.obtenerPromedioCalificaciones()}`);
console.log(`El promedio general de los estudiantes es ${gestorEstudiantes.obtenerPromedioGeneralEstudiantes()}`);

console.log("Buscar el estudiante 1");
console.log(gestorEstudiantes.obtenerEstudiantePorId(1));
console.log("Eliminar el estudiante 1");
console.log(gestorEstudiantes.eliminarEstudiantePorId(1));

console.log("Buscar el estudiante 1");
console.log(gestorEstudiantes.obtenerEstudiantePorId(1));


