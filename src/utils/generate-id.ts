import { UniqueID } from 'nodejs-snowflake';

const idGenerator = new UniqueID({});

export const generateIdAsync = async () => {
  const id = await idGenerator.asyncGetUniqueID();
  if (typeof id === 'string') return id;
  throw new Error('Generated ID is not string');
};
