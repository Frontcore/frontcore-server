import { MongoClient } from 'mongodb';

export class MongoDB {
  constructor(params) {
    this.baseUrl = params.baseUrl;
    this.dbPort = params.dbPort;
    this.dbName = params.dbName;
  }

  connect() {
    let mongoConnectionURL = this.baseUrl  + ':' + this.dbPort + '/' + this.dbName;
    MongoClient.connect(mongoConnectionURL, (error, db) => {
      if(error) {
        throw error;
      }
      db.close();
    });
    return MongoClient;
  }

};
