import React from "react";

const Card = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1570949144026-8f8141748760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                view the some pictures of the flowerx in the border.
              </p>
              <a href="https://www.ajio.com/s/perfumes-5260-44721" class="btn btn-primary">
                @111
              </a>
              <a href="https://www.ajio.com" class="btn btn-primary"> XXXX</a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1476994230281-1448088947db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
