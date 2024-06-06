export const randomIdGenerator = () => {
  const str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let idLength = 6;
  let id = "";

  for (let i = 0; i < idLength; i++) {
    const randomPosition = Math.floor(Math.random() * str.length);
    id += str[randomPosition];
  }
  return id;
};
