function notFoundError(entity: string) {
  return {
    type: "error_not_found",
    message: `Não foi possível encontrar ${entity}.`,
  };
}

function conflictError(message: string) {
  return {
    type: "error_conflict",
    message,
  };
}

function unauthorizedError(entity: string) {
  return {
    type: "error_unauthorized",
    message: `${entity} está incorreto.`,
  };
}

function unprocessableEntityError(messages: string[]) {
  return {
    type: "error_unprocessable_entity",
    message: messages,
  };
}

const errorFactory = {
  notFound: notFoundError,
  conflict: conflictError,
  unauthorized: unauthorizedError,
  unprocessable: unprocessableEntityError,
};

export default errorFactory;
