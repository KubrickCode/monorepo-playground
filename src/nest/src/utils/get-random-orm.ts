export enum Orm {
  Prisma = 'Prisma',
  TypeOrm = 'TypeOrm',
}

export const getRandomOrm = () => {
  const values = Object.values(Orm);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};
