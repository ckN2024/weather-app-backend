import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import jwk from "./jwk.js";

const getDataFromToken = async (access_token) => {
  // console.log(`access_token`, access_token)
    const result = await fetch(
        "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_sq7Hcnvxh/.well-known/jwks.json"
      );
      const data = await result.json();
      const jwkFromUrl = data.keys[1];
    
      const key = jwkFromUrl || jwk;
    
      // verify the token
      var pem = jwkToPem(key);
      
      try {
        const decodedToken = jwt.verify(access_token, pem, {
          algorithms: ["RS256"],
        });
        return {
            data: decodedToken,
            message: "Token verified"
        }
      } catch (error) {
        console.log(`Error in token verify: ${error}`)
        return {
            data: null,
            message: error.message
        }
      }
}

export default getDataFromToken