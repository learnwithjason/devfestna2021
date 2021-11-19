import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const { name = 'world' } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: `hello ${name}!`,
  };
};
