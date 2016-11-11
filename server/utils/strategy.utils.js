import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';

const secret = 'frontcore';

class Strategy {

  authStrategy(User) {
    let options = {};
    options.jwtFromRequest = ExtractJwt.fromAuthHeader();
    options.secretOrKey = secret;

    passport.use(new JwtStrategy(options, function(jwt_payload, callback) {
      User.findOne({id: jwt_payload.id}, function(error, user) {
        if (error) {
          return callback(error, false);
        }
        if (!user) {
          callback(null, false);
        }
        callback(null, user);
      });
    }));
  }
}

module.exports = Strategy;
