
const express=require('express');
const ticketApp=express.Router();

const {bookTicket,updateTicketStatus}=require('../Controllers/ticketControllers');
const expressAsyncHandler = require('express-async-handler');
const verifyToken=require('../Middlewares/verifyToken');

ticketApp.post('/bookTicket',verifyToken,expressAsyncHandler(bookTicket));





module.exports=ticketApp