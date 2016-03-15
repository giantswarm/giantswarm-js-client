// to be thrown in case of bad parameters/arguments/values given

function UserException(message) {
   Error.captureStackTrace(this);
   this.message = message;
   this.name = "UserException";
}
UserException.prototype = Object.create(Error.prototype);


module.exports = UserException;