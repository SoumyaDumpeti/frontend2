
const Ticket=require('../Models/Ticket');
const Movie=require('../Models/Movie');

const bookTicket=async(req,res)=>{
  console.log(req.body,"req")
    const movieName=req.body.movieName
    console.log(movieName)
    const {theatreName,numberOfTickets,seatNumbers}=req.body

    const movie=await Movie.findOne({movieName:movieName,theatreName:theatreName});
    
  
    if(!movie){
        return res.status(404).send({message:"Movie not found"})
    }
    if(movie.availableTickets<numberOfTickets){
        return res.status(400).send({message:"Not enough tickets available"})
    }

    const ticket=await Ticket.create({movieName,theatreName,numberOfTickets,seatNumbers});
    console.log(ticket)
    movie.availableTickets-=numberOfTickets;
    if(movie.availableTickets===0){
        movie.status='SOLD OUT';
    }
    res.status(200).send({message:"Tickets booked successfully",payload:ticket})
}




module.exports={bookTicket}