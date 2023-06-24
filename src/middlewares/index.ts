import pagination from "./pagination.middleware";
import handleError from "./handleError.middleware";
import validateBody from "./validateBody.middleware";
import verifyIdExists from "./verifiIdExists.middleware";
import verifyNameExists from "./verifyNameExists.middleware";

export default {
  handleError,
  validateBody,
  verifyNameExists,
  pagination,
  verifyIdExists,
};
