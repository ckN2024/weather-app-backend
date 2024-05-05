import https from 'https';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function replaceSpacesWithPlus(str) {
    let result = '';
    for (const char of str) {
        if (char === ' ') {
            result += '+';
        } else {
            result += char;
        }
    }
    return result;
}

function makeApiCall(url) {
    return new Promise((resolve, reject) => {
        // define options
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        // Create the HTTPS request
        const req = https.request(url, options, (res) => {
            let data = '';

            // Receive the response data
            res.on('data', (chunk) => {
                data += chunk;
            });

            // Once the response is complete, resolve the promise with the data
            res.on('end', () => {
                resolve(data);
            });
        });

        // Handle any errors that occur during the request
        req.on('error', (error) => {
            reject(error);
        });

        // End the request
        req.end();
    });
}

export const handler = async (event, context) => {
    // find the length of the event 
    const jsonLength = event.length;
    
    // find random number between 0 and length-1
    const rand = getRandomNumber(0, jsonLength);
    
    let city = event[rand].cityName;
    // console.log(city)
    
    // put a + in place of " " in cityName
    city = replaceSpacesWithPlus(city);
    
    // make api endpoint
    const APIKEY = '0f943144119ee34fafa5deae551bbbaf';    //********Put in env
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    
    try {
        const response = await makeApiCall(url);
        console.log(response);
        // Handle the response here
    } catch (error) {
        console.error('API call failed:', error);
        // Handle error
    }
};
