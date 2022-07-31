const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require ('cors');
const register = require ('./controlers/register');
const signin = require('./controlers/signin');
const profile = require ('./controlers/profile');
const image = require('./controlers/image');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'ilovechilly',
    database : 'smartbrain'
  }
});

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {res.json('success')})
app.post('/signin', signin.handleSignin(knex, bcrypt))
app.post('/register', (req, res) => {register.handleRegister(req, res, knex, bcrypt)})
app.get('/profile/:id' , (req, res) => {profile.handleProfile(req, res, knex)})
app.put('/image', (req, res) => {image.handleImage(req, res, knex)})
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})


