import { Handler } from '@netlify/functions';

export const handler: Handler = async () => {
  const pets = [
    {
      id: 1,
      name: 'Fluffy',
      type: 'dog',
    },
    {
      id: 2,
      name: 'Mittens',
      type: 'gerbil',
    },
    {
      id: 3,
      name: 'Bruiser',
      type: process.env.SECRET_VALUE,
    },
  ];

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pets),
  };
};
