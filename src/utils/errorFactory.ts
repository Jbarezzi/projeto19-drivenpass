export function notFoundError(entity: string) {
  return {
    type: "error_not_found",
    message: `${entity} was not found.`,
  };
}

export function conflictError(message: string) {
  return {
    type: "error_conflict",
    message,
  };
}

export function unauthorizedError(entity: string) {
  return {
    type: "error_unauthorized",
    message: `There is no ${entity} in the request.`,
  };
}

export function unprocessableEntityError(messages: string[]) {
  return {
    type: "error_unprocessable_entity",
    message: messages,
  };
}

export function forbiddenError() {
  return {
    type: "error_forbidden",
    message: "Email or password are invalid.",
  };
}
