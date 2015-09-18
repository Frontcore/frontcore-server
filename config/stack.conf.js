'use strict';

module.exports = {
    "server": {
        "dev": {
            "port": "9000",
            "ip": "127.0.0.1",
            "codebase": "../client",
            "NODE_ENV": "development"
        },
        "prod": {
            "port": "8000",
            "ip": "127.0.0.1",
            "codebase": "../client-prod",
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
    }
};