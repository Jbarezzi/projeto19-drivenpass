export function notFoundError(entity: string) {
  return {
    type: "error_not_found",
    message: `Não foi possível encontrar ${entity}.`,
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
    message: `${entity} está incorreto.`,
  };
}

export function unprocessableEntityError(messages: string[]) {
  return {
    type: "error_unprocessable_entity",
    message: messages,
  };
}
