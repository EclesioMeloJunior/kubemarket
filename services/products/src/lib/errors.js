/**
 *
 * @param {string} text
 * @param {array} messages
 * @param {object} params
 * @return {object} errorOut é o objeto de error formatado
 */
function format(text, messages = [], params = {}) {
  const errorOut = {
    error: text,
    messages: [...messages],
  };

  if (params && params.message && typeof params.message === 'string') {
    errorOut.messages = errorOut.messages.concat(params.message);
  }

  if (params && params.messages && Array.isArray(params.messages)) {
    errorOut.messages = [...errorOut.messages, ...params.messages];
  }

  return errorOut;
}

const badRequestError = (params) =>
  format('BAD_REQUEST_ERROR', ['Bad request error'], params);

const missingArgumentsError = (params) =>
  // eslint-disable-next-line max-len
  format('MISSING_ARGUMENTS_ERROR', ['There are missing arguments in this request'], params);

const unauthorizedError = (params) =>
  format('UNAUTHORIZED_ERROR', ['Not Allowed to continue this action'], params);

const insertDbError = (params) =>
  // eslint-disable-next-line max-len
  format('INSERT_DB_OPERATION_ERROR', ['Problems to insert data on database'], params);

const readDbError = (params) =>
  // eslint-disable-next-line max-len
  format('READ_DB_OPERATION_ERRRO', ['Problems to read data on database'], params);

const customError = format;

module.exports = {
  badRequestError,
  unauthorizedError,
  customError,
  insertDbError,
  readDbError,
  missingArgumentsError,
};
