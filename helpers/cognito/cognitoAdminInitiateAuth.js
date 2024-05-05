import AWS from "aws-sdk";

AWS.config.update({ region: "eu-north-1", });

const cognitoAdminInitiateAuth = async (email) => {
    const payload = {
        UserPoolId: process.env.COGNITO_USER_POOL_ID,
        AuthFlow: "ADMIN_NO_SRP_AUTH",
        ClientId: process.env.COGNITO_CLIENT_ID,
        AuthParameters: {
          USERNAME: email,
        //   SECRET_HASH: generateSignature(username)
        }
      };
      
      try {
        const cognitoClient = new AWS.CognitoIdentityServiceProvider();
        const response = await cognitoClient.adminInitiateAuth(payload).promise();
      
        const accessToken = response.AuthenticationResult.AccessToken;
        const idToken = response.AuthenticationResult.IdToken;
        const refreshToken = response.AuthenticationResult.RefreshToken;
      
        return { accessToken, idToken, refreshToken };
      } catch (error) {
        console.log("AdminInitiateAuth error.")
        console.log(error)
        return null;
      }
}

export default cognitoAdminInitiateAuth