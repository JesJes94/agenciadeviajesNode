import {Viaje} from '../models/viajes.js'
import {Testimonial} from '../models/testimoniales.js';

const paginaInicio = async (req, res) => {

    const promisedB = []

    promisedB.push(Viaje.findAll({limit: 3}));
    promisedB.push(Testimonial.findAll({limit:3}));

    try {
        const resultado = await Promise.all(promisedB); //Se ejecuta las consultas de base de datos al mismo tiempo.

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0], testimoniales: resultado[1] 
        });
    } catch (error) {
        console.log(error);
    }

    
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales', 
            testimoniales
        })
    }

    catch (error) {
        console.log(error)
    }
    
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    });
}

const paginaViajes = async (req, res) => {
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

//MUestra un viaje por su slug

const paginaDetalle = async (req, res) => {
    
    const {slug} = req.params;

    try {
        const viaje = await Viaje.findOne({where : { slug }});
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        });

    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalle
}