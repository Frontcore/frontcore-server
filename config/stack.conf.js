/**
 * Holds client/server stack configuration
 * @module stack
 */
module.exports = {
  "server": {
    "dev": {
      "port": "9000",
      "ip": "127.0.0.1",
      "codebase": "../dist",
      "NODE_ENV": "development"
    },
    "prod": {
      "port": "8000",
      "ip": "127.0.0.1",
      "codebase": "../dist",
      "NODE_ENV": "production"
    }
  },
  "api": {
    "defaults": {
      "version": "v1"
    }
  },
  "logger": {
    "dirname": "logs",
    "filename": "access.log"
  },
  "upload": {
    "dirname": "upload"
  }
};
