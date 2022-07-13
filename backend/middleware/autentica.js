const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const Usuario = require('../database/models/Usuario');
require("dotenv").config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
  passReqToCallback: true,
};

passport.use(
  new JwtStrategy(options, async (request, jwt_payload, done) => {
    const user = await Usuario.findOne({ id: jwt_payload.sub }, '-senha');

    if (!user) return done(null, false);

    const authHeader = request.headers.authorization;
    const [, token] = authHeader.split(' ');

    return done(null, { profile: user, token });
  })
);