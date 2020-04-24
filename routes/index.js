const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/* GET Home Page */
router.get('/', function(req, res, next)
{
    res.render('index', {projects});
})

/* GET Project Page */
router.get('/projects/:id', function(req, res, next)
{
    const projectId = req.params.id;
    const project = project.find(({ id }) => id === +projectId);

    if (project) 
    {
        res.render('project', {project});
    }
    else
    {
        res.sendStatus(404);
    }
});