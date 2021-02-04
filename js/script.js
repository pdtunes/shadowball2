const apiUrl =
  "https://shadowball.co.za/wp-json/wp/v2/posts";


fetch(apiUrl)
  .then((response) => response.json())
  .then(function (results) {


    const cards = document.querySelector(".col-sm");
    results.forEach((post) => {
     fetch(post._links['wp:attachment'][0].href)
     .then(r => r.json())
     .then((imgresponse) => {


      cards.innerHTML += `<div class="card">
      <img src="${imgresponse[0] ? imgresponse[0].source_url : "/shadowball2/img/Shadow_ball_logo.png"}">
    <a href="${post.link} <h4 class="name"> ${post.title.rendered}</h4>
    <p>${post.excerpt.rendered}</p> </a>
    </div>`;
    });
    });

  })

  .catch((error) => {
    console.log(error);
  });





