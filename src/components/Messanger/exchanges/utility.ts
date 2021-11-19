export const makeExchangeFunction = (
  name: string,
  avatar: any,
  color: string[],
) => {
  return (exchanges: (string | {image: any; aspect?: number})[]) => {
    return {
      name: name,
      exchange: exchanges,
      avatar: avatar,
      color: color,
    };
  };
};
