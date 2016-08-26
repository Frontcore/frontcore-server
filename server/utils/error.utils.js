/**
 * Utility function to identify error code and return error message, http error status.
 */
export class ErrorHandler {
  constructor(error) {
    this.error = error;
    this.errorCode = error.code;
  }

  getErrorMessage() {
    switch (this.errorCode) {
      case 'ENOENT':
        return {
          status: 400,
          response: {
            message: 'No such file or directory found.',
            path: this.error.path
          }
        };
    }
  }
};
