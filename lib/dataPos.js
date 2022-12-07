import got from 'got';
//
//const dataURL = "https://dev-sqlsite.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1";
const dataURL = "https://dev-sqlsite.pantheonsite.io/wp-json/twentytwentyone-child/v1/positive";

//FUNCTION ONE*****
//function returns ids for all json  in array
//retrieving data over the internet is an asynchronous op
export async function getAllIds()
  {
    let jsonString;
    
    try {
      jsonString = await got(dataURL);
      //console.log(jsonString.body);
    } catch(error) {
      jsonString.body=[];
      console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);
    let x = jsonObj.map(item=> {
      return{
        params:{
          id: item.ID.toString()
        }
      }
      
    });
    console.log("FROM GETALLIDS" , x);
    return x;
  }


//NEXT FUNCTION *******
//sends back an array of object values with ids and names in them, sorted alphabetically
export async function getSortedList()
  {

    let jsonString;
    
    try {
      jsonString = await got(dataURL);
    } catch(error) {
      jsonString.body=[];
      console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);

  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
    
  }
//NEXT FUNCTION *******
//function returns names and ids for all json objects in array, sorted by name property
//async function that gets complete data for just one person
//THIS IS THE FUNCTION USED BY GETSTATICPROPS() IN [ID].JS
export async function getData(iDRequested)
  {

//Find obj value in array with matching id. RETURNS AN ARRAY WITH ONE ELEMENT IN IT
    //****HERE do  a filter to find the other people associated****
    let jsonString;
    
    try {
      jsonString = await got(dataURL);
      //console.log(jsonString.body);
    } catch(error) {
      jsonString.body=[];
      console.log(error);
    }

    const jsonObj = JSON.parse(jsonString.body);
    
    const objMatch = jsonObj.filter(
      obj => {
        return obj.ID.toString() === iDRequested;
      }
    );

        
    const objMatch2 = jsonObj.filter(
      obj => {
        return obj.ID.toString() === iDRequested;
      }
    );

    //extract obj value in array if any exist
    let objReturned;
    if (objMatch.length > 0)
    {
      objReturned = objMatch[0];
    }
    else
    {
      objRetured = {};
    }

        //extract obj value in array if any exist
    let objReturned2;
    if (objMatch2.length > 0)
    {
      objReturned2 = objMatch2[0];
    }
    else
    {
      objRetured2 = {};
    }

    return [objReturned,objReturned2];
  }
  