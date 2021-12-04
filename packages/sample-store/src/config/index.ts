const getConfig = () => {
  const config = {
    debug: process.env.REACT_APP_DEBUG! || true,
    storeKey: process.env.REACT_APP_STORE_KEY! || 'store',
    tokenKey: `${process.env.REACT_APP_STORE_KEY}-token`,
    tokenAddress: process.env.TOKEN_CONTRACT_ADDRESS || '',
    marketAddress: process.env.MARKET_CONTRACT_ADDRESS || '',
    eqEnvironment: process.env.EQ_ENVIRONMENT || 'dev',
    stripePublishKey:
      'pk_test_51JHjgnIH41dQfUTLtslYWJaLgZiuCEFQU14jdxGV5x24aTlXqKiIdGi0rSZXJjf9NbxQ2eREZcwCmjMbk3cVI3Ah008tTVPQiy',
    urls: {
      api: process.env.REACT_APP_API_URL!,
      celoNetwork:
        process.env.CELO_NETWORK_URL ||
        'https://alfajores-forno.celo-testnet.org',
    },
  };

  return config;
};

const config = getConfig();
console.log({ config });
export default config;
