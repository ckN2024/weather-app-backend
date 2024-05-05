import AmazonCognitoIdentity from "amazon-cognito-identity-js";

const cognitoSignUp = (email, password) => {

  return new Promise((resolve, reject) => {
    var poolData = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      ClientId: process.env.COGNITO_CLIENT_ID,
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  
    var attributeList = [];
  
    userPool.signUp(email, password, attributeList, null, function (err, result) {
      if (err) {
        console.log("cognito: failed to register user", err.message);
        reject(null)
      }
      console.log("cognito: user registered successfully");
      // console.log(result);
      resolve(result);
      /*
        result:
        {
          user: CognitoUser {
          username: 'ck@tyloones.com',
          pool: CognitoUserPool {
          userPoolId: 'eu-north-1_sq7Hcnvxh',
          clientId: '3ats3ag1guihb241e06epnsvg7',
          client: [Client],
          advancedSecurityDataCollectionFlag: true,
          storage: [Function]
        },
        Session: null,
        client: Client {
          endpoint: 'https://cognito-idp.eu-north-1.amazonaws.com/',
          fetchOptions: {}
        },
        signInUserSession: null,
        authenticationFlowType: 'USER_SRP_AUTH',
        storage: [Function: MemoryStorage] {
          setItem: [Function: setItem],
          getItem: [Function: getItem],
          removeItem: [Function: removeItem],
          clear: [Function: clear]
        },
        keyPrefix: 'CognitoIdentityServiceProvider.3ats3ag1guihb241e06epnsvg7',
        userDataKey: 'CognitoIdentityServiceProvider.3ats3ag1guihb241e06epnsvg7.ck@tyloones.com.userData'
      },
      userConfirmed: false,
      userSub: '90ac79dc-90c1-709c-0bda-964fe0027c3f',
      codeDeliveryDetails: {
        AttributeName: 'email',
        DeliveryMedium: 'EMAIL',
        Destination: 'c***@t***'
      }
    }
            */
    });
  })
};

export default cognitoSignUp;
