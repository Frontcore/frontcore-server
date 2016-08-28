import mongoose from 'mongoose';

export class MongoDB {
  constructor(params) {
    this.baseUrl = params.baseUrl;
    this.dbPort = params.dbPort;
    this.dbName = params.dbName;
  }

  connect() {
    let mongoConnectionURL = this.baseUrl  + ':' + this.dbPort + '/' + this.dbName;
    mongoose.connect(mongoConnectionURL);
    return mongoose;
  }

};
