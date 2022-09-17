import express from 'express';
import mongoose from 'mongoose';
import './services/passport.js';
import authRoutes from './routes/authRoutes.js';
import cookieSession from 'cookie-session';
import passport from 'passport';

mongoose.connect(process.env.mongoURI);

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
//kkk
