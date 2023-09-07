const delay = (times) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, times);
  });
};

const mockSpi = async () => {
  await delay(2000);
  return {
    apiName: "mockSpi",
    apiData: {},
  };
};

export default {
  mockSpi,
};
