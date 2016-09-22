import mongoose from 'mongoose';

export class MongoDB {
  constructor(params) {
    this.baseUrl = params.baseUrl;
    this.dbPort = params.dbPort;
    this.dbName = params.dbName;

    /**
     * In-case MongoDB connection throws an error
     */
    mongoose.connection.on('error', (error) => {
      console.error('\n Mongoose default MongoDB connection error');
      console.error(' More Info on error: ', error);
    });

    /**
     * In-case the Node process ends, close the Mongoose connection
     */
    process.on('SIGINT', function() {
      mongoose.connection.close(function () {
        console.log('\n Mongoose default MongoDB connection disconnected through app termination');
        process.exit(0);
      });
    });
  }

  connect() {
    let mongoConnectionURL = this.baseUrl  + ':' + this.dbPort + '/' + this.dbName;
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoConnectionURL);
    return mongoose;
  }

};
