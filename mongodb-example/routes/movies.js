import { Router } from 'express';
import Movie from '../models/movie.js';

const router = Router();

router.get('/', async (req, res) => {
    let result = await Movie.find();
    res.json({
        data : result,
        success : true
    });
});

router.post('/', async (req, res) => {
    const result = await Movie.create(req.body);
    res.json({
        success : true,
        data : result
    });
});

export default router;