import AmazonCognitoIdentity from "amazon-cognito-identity-js";

const cognitoVerify = (email, verifyCode) => {
  
  return new Promise((resolve, reject) => {
    if(!email && !verifyCode){
      reject(null);
    }

    var poolData = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      ClientId: process.env.COGNITO_CLIENT_ID,
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
      Username: email, // ##############put user email here
      Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.confirmRegistration(verifyCode, true, function (err, result) {
      if (err) {
        reject(err);
      }
      console.log(`cognitoVerify -> result : ${result}`)
      
      resolve(result);
    });
  });
};

export default cognitoVerify;
