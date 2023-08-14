export const databaseProvider = [
  {
    provide: "ASYNC_CONNECTION",
    useFactory: async () => {
      const connection = await createConnection();
      return true;
    },
  },
];

const createConnection = async () => {
  setTimeout(() => console.log("Connection created"), 1000);
  return true;
};
