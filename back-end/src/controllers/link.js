const express = require('express');

const {Link} = require('../models');
const account = require('../validators/account');

const router = express.Router();

router.get('/', async (req,res) => {

    const {accountId} = req;
    const links = await Link.findAll({where: {accountId}})

    return res.jsonOk(links);
})

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const {accountId} = req;

    const link = await Link.findOne({where: {id, accountId}})
    if(!link) return res.jsonNotFound();

    return res.jsonOk(link);
})

router.post('/', async (req,res) => {

    const {accountId, body} = req;
    const {label, url, isSocial} = body;

    
    const image = "http://google.com/image.jpg";
    
    const link = await Link.create({
        label,
        url,
        isSocial,
        image,
        accountId
    })

    return res.jsonOk(link);
})

router.put('/:id', async (req,res) => {
    
    const {id} = req.params;
    const {body, accountId} = req;


    const fields = ['label','url','isSocial'];


    const image = "http://google.com/image.jpg";

    const link = await Link.findOne({where: {id, accountId}})
    if(!link) return res.jsonNotFound();

    fields.map(fieldName => {
        const newValue = body[fieldName];

        if(newValue) link[fieldName] = newValue;
    })

    await link.save();

    return res.jsonOk(link);



    return res.jsonOk(link);
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const {accountId} = req;

    const link = await Link.findOne({where: {id, accountId}})
    if(!link) return res.jsonNotFound();
    await link.destroy();

    return res.jsonOk();

})

module.exports = router;