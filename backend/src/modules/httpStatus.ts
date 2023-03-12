const httpStatus = {
  CREATE: 201,
  GET: 200,
  DELETE: 200,
  UPDATE: 200,
  INTERNAL_ERROR: 500,
  INPUT_ERROR: 422,
  AUTH_ERROR: 403,
  DUPLICATE: 409
} as const;

export { httpStatus };
