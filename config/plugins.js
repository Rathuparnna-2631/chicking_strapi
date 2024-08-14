
module.exports = {
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "firebase-auth": {
    enabled: true,
    config:{ FIREBASE_JSON_ENCRYPTION_KEY:"athul" }
},
};