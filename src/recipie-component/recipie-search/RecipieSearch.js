import React from 'react';

const Recipiesearch = () => {
    return (
        <div className="d-flex justify-content-center" id="search-food-div">
        <form className="row g-3 my-3" onSubmit={submit}>
          <div className="col-auto">
            <input
              className="mx-2 form-control"
              type="text"
              placeholder="Enter ingridient"
              value={query}
              onChange={(event) => setstate(event.target.value)}
            ></input>
          </div>
          <div className="col-auto">
            <button className="form-control btn btn-primary" type="submit">
              {" "}
              Search
            </button>
          </div>
        </form>
      </div>
    );
}

export default Recipiesearch;
