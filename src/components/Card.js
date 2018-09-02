import React from "react";

const Card = ({ results }) => {
  const resultLength = results.length;
  const resultList = resultLength
    ? results.map(result => {
        return (
          <div className="card m-3 bg-dark text-light" key={Math.random()}>
            <img
              className="card-img-top"
              src={result.artworkUrl100}
              alt="artwork"
            />
            <div className="card-body">
              <h5 className="card-title">{result.collectionName}</h5>
              <p className="card-text">{result.artistName}</p>
              <a
                href={result.collectionViewUrl}
                className="btn btn-primary"
                target="_blank"
              >
                view on iTunes
              </a>
            </div>
          </div>
        );
      })
    : null;

  return (
    <div id="result-section" className="mx-auto mt-4">
      {resultList}
    </div>
  );
};

export default Card;
