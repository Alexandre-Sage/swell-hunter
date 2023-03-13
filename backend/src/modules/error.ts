import { httpStatus } from "./httpStatus";

class CustomError extends Error {
  constructor(readonly httpStatus: number, readonly message: string) {
    super(message);
    (this.message = message), (this.httpStatus = httpStatus);
  }
}

const sqliteError = (error: any) => {
  let message = "Something went wrong please retry";
  let httpStatus = 500;
  switch (error.code) {
    case "SQLITE_CONSTRAINT_UNIQUE": {
      const errorMessage = error.message.split(".");
      const fieldNameIndex = errorMessage.length - 1;
      message = `The provided ${errorMessage[fieldNameIndex]
        .split("_")
        .join(" ")} already exist`;
      httpStatus = 409;
      break;
    }
    default:
      console.log({ sql:error });
  }
  return {
    message,
    httpStatus,
  };
};

const errorHanlder = (error: any) => {
  if (error.message.split(":")[0] === "joiError")
    return {
      message: error.message.split(":")[1],
      httpStatus: httpStatus.INPUT_ERROR,
    };
  else if (error.httpStatus)
    return {
      httpStatus: error.httpStatus,
      message: error.message,
    };
  else if (error.code && error.code.split("_")[0] === "SQLITE")
    return sqliteError(error);
  else
    return {
      message: "Something went wrong",
      httpStatus: 500,
    };
};

export { CustomError, errorHanlder, sqliteError };
