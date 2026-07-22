import type { User } from '~/types/user';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  //TODO find user in DB
  const users = <User[]>[
    {
      id: '1',
      name: 'Pero',
      email: 'pero@g.com',
      password: '123456',
      role: 'client',
    },
  ];

  const user = users.find((u) => u.email === email);
  console.log(body);
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found!',
    });
  }

  //TODO: verify password
  if (user.password !== password) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Password does not match!',
    });
  }

  //TODO: create session/token

  //TODO: save in HttpOnly cookie

  return {
    user: {
      id: user?.id,
      email: user?.email,
      name: user?.name,
      role: user?.role,
    },
  };
});
