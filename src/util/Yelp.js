const apiKey ='HSUTa8d2wRHVMkO2aWCkfzXH0YOtwkT0a3_zxmpNcNOpBtvLanUWHQM_4lss4eu7h6F79aSI-_V7WnfN9m1WZAMnF_Ia59AWAJb2vOweLPVwaiq1ZEntgvEw21jrWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business =>
     ({
       id: business.id,
       imageSrc: business.image_url,
       name: business.name,
       address: business.location.address1,
       city: business.location.city,
       zipCode: business.location.zip_code,
       category: business.categories[0].title,
       rating: business.rating,
       reviewCount: business.review_count
     }));
    }
  });
  }
};

export default Yelp;
