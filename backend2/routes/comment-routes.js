const express = require("express");
const client = require("../models/DbConfig");
const { authenticateToken } = require('../middleware/authorization')
const router = express.Router();

router.get('/:blogId', async (req, res) => {
    const blogId = req.params.blogId;
    try{
    const comments = await client.query(`select * from comments where blog_id =  '${blogId}'`)
    res.status(200).send(comments.rows)}
    catch(error){
        res.status(401).json({error: error})
    }
})
router.post('/create', authenticateToken, async (req, res) => {
    const on_commit = req.body
    try{ 
        await client.query(`insert into comments (blog_id, comment_by_email, comment_by_firstname, comment) values ($1,$2,$3, $4)`,[on_commit.blog_id, on_commit.comment_by_email, on_commit.comment_by_firstname, on_commit.comment])
        res.status(200).send('ok')
        }catch(error){
            res.status(500).json(error)
            console.log(error)
        }
})
router.delete('/:comment_id/:email', authenticateToken , async (req, res)=>{
    const comment_id = req.params.comment_id
    const email = req.params.email
    console.log(comment_id)
    console.log(email)
    try{
        let check = await client.query(`delete from comments where comment_id = '${comment_id}' and comment_by_email = '${email}'`)
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