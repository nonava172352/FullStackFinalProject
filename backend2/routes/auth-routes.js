const express = require("express");
const jwt = require("jsonwebtoken");
const client = require("../models/DbConfig");
const { jwtTokens } = require("../utils/jwt-helpers.js");

const router = express.Router();
router.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        const users = await client.query(
            `select * from users where email = '${email}'`
        )
        const vaildEmail = users.rows.length !== 0;
        const validPassword = true;

        if(!vaildEmail){
            return res.status(401).json({error: "Email is incorrect"})
        }
        console.log(users.rows[0].password)
        console.log(password)
        if(users.rows[0].password !== password){
            console.log('test')
            validPassword = false;
            return res.status(401).json({error: "Password is incorrect"})
        }else{
            if(vaildEmail && validPassword){

                let tokens = jwtTokens(
                    users.rows[0].firstname,
                    users.rows[0].lastname,
                    users.rows[0].email,
                    users.rows[0].phone,
                    users.rows[0].password,
                    users.rows[0].detail,
                    users.rows[0].facebook
                ) 
    
                res.json({ tokens: tokens });
            }
        }


    }catch (error){
        res.status(401).json({error: error})

    }
})
router.get("/refresh_token", (req, res) => {
    try {
      const authHeader = req.headers["authorization"];
      const refreshToken = authHeader && authHeader.split(" ")[1];
      if (refreshToken === null) return res.sendStatus(401);
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (error, user) => {
          if (error) return res.status(403).json({ error: error.message });
          res.json(
            jwtTokens(
              user.firstname,
              user.lastname,
              user.email,
              user.phone,
              user.password,
              user.detail,
              user.facebook
            )
          );
        }
      );
    } catch (error) {
      res.status(401).json({ error: error.message });
      console.log(error);
    }
  });

module.exports = router;