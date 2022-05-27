const express = require("express");
const client = require("../models/DbConfig");
const { authenticateToken } = require('../middleware/authorization')
const router = express.Router();

router.get('/', async (req, res) => {
    try{
    const blog = await client.query(`select * from blog`)
    res.status(200).send(blog.rows)}
    catch(error){
        res.status(401).json({error: error})
    }
})
router.post('/create', authenticateToken, async (req, res) => {
    const on_commit = req.body
    try{ 
        await client.query(`insert into blog (title, content, img, create_by_email ) values ($1,$2, $3, $4)`,[on_commit.title, on_commit.content, on_commit.img, on_commit.create_by_email])
        res.status(200).send('ok')
        }catch(error){
            res.status(500).json(error)
            console.log(error)
        }
})
router.delete('/:blogId/:email', authenticateToken , async (req, res)=>{
    const blogId = req.params.blogId
    const email = req.params.email
    console.log(blogId)
    console.log(email)
    try{
        let check = await client.query(`delete from blog where blog_id = '${blogId}' and create_by_email = '${email}'`)
        if(check.rowCount == 0){
            res.status(304).send('ไม่สามารถลบได้')
        }else{
            res.status(200).send('ลบสำเร็จ')
        }
    }catch(error){
        res.status().json(error)
        console.log(error)
    }
})
module.exports = router;