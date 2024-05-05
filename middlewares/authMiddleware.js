import errorResponse from "../helpers/response/errorResponse.js"
import getDataFromToken from "../helpers/cognito/getDataFromToken.js";

const authenticateUser = async (req, res, next) => {
  // Extract access token from header
  const access_token = req.headers.authorization.split(" ")[1]

  // console.log(access_token)
  const decodedToken = await getDataFromToken(access_token)
  // console.log("token is decoded: \n", decodedToken)

  if(decodedToken.data) {
    req.headers.uuid = decodedToken.data.sub
    next()
  } else {
    errorResponse(res, 400, "Authentication error", decodedToken.message)
  }

  // const result = await fetch(
  //   "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_sq7Hcnvxh/.well-known/jwks.json"
  // );
  // const data = await result.json();
  // const jwkFromUrl = data.keys[1];

  // const key = jwkFromUrl || jwk;

  // // verify the token
  // var pem = jwkToPem(key);
  
  // try {
  //   const decodedToken = jwt.verify(access_token, pem, {
  //     algorithms: ["RS256"],
  //   });
  //   console.log(decodedToken);

  //   next(); 
  // } catch (error) {
  //   errorResponse(res, 400, "Authentication error", error.message)
  // }
};

// Export the authenticateUser middleware function
export default authenticateUser;
