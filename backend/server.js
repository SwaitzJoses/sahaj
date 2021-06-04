import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import morgan from 'morgan'
import userRoute from './routes/userRoute.js'


dotenv.config();

connectDB() 

const app=express();

app.use(morgan('dev'))

app.use(express.json())


app.use('/api/users',userRoute)

const PORT=process.env.PORT || 5000
  
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}! & is in ${process.env.NODE_ENV} mode.`.yellow.inverse);    
});  