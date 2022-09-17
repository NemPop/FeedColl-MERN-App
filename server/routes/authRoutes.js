import passport from 'passport';
import { Router } from 'express';

const authRoutes = Router();

authRoutes.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRoutes.get('/google/callback', passport.authenticate('google'));

authRoutes.get('/logout', (req, res) => {
  req.logout();
});

authRoutes.get('/current_user', (req, res) => {
  res.send(req.user);
});

export default authRoutes;
