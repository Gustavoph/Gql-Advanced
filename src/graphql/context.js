import jwt from 'jsonwebtoken';
import { UsersApi } from './user/datasources';

const verifyToken = async (token) => {
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    const userApi = new UsersApi();
    userApi.initialize({});
    const foundUser = await userApi.get(userId);

    if (foundUser.token !== token) return '';
    return userId;
  } catch (e) {
    return '';
  }
};

const authorizeUserWithBearerToken = async (req) => {
  const { headers } = req;
  const { authorization } = headers;

  try {
    const [_bearer, token] = authorization.split(' ');
    return await verifyToken(token);
  } catch (e) {
    return '';
  }
};

const cookieParser = (cookiesHeader) => {
  if (typeof cookiesHeader != 'string') return {};

  const cookies = cookiesHeader.split(/;\s*/);

  const parsedCookie = {};
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    parsedCookie[key] = value;
  }

  return JSON.parse(JSON.stringify(parsedCookie));
};

// const cookieToken = 'req.headers.cookie';

export const context = async ({ req, res }) => {
  let loggedUserId = await authorizeUserWithBearerToken(req);

  console.log(req.headers.cookie);

  if (!loggedUserId) {
    if (req.headers.cookie) {
      const { jwtToken } = cookieParser(req.headers.cookie);
      loggedUserId = await verifyToken(jwtToken);
    }
    loggedUserId = '';
  }

  return {
    loggedUserId,
    res,
  };
};
