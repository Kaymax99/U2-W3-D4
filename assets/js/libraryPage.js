const asyncCards = async function () {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books");
    if (res.ok) {
      let data = await res.json();
      let cardContainer = document.getElementById("cardContainer");

      data.forEach((book) => {
        cardContainer.innerHTML =
          cardContainer.innerHTML +
          `<div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-4">
                <div class="card">
                    <img src="${book.img}" class="card-img-top" alt="...">
                    <div class="card-body d-flex align-items-center flex-column justify-content-between">
                        <h5 class="card-title">${book.title}</h5>
                        <div class="text-center d-flex align-items-center">
                            <p class="card-text">${book.price} €</p>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
      });
    } else {
      console.log("Non è stato possibile ricevere una risposta dal server");
    }
  } catch (error) {
    console.log(error);
  }
};

asyncCards();
