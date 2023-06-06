import express from 'express';
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalle } from '../controllers/paginas-controller.js';
import { guardarTestimonial } from '../controllers/testimonial-controller.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial)

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalle);

export default router;