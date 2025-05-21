import React from "react";

const ResultViewer = ({ result }) => {
  if (!result) {
    return (
      <div className="alert alert-info mt-4" role="alert">
        Upload an image to get prediction results.
      </div>
    );
  }

  return (
    <div className="card mt-4 shadow-sm">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">Detection Result</h5>
      </div>

      <div className="card-body">
        <p><strong>Disease:</strong> {result.disease}</p>
        <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>

        {result.suggestions && (
          <>
            <hr />
            <h6>Suggestions:</h6>
            <ul>
              {result.suggestions.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </>
        )}

        {result.image && (
          <>
            <hr />
            <h6>Detected Image:</h6>
            <img
              src={result.image}
              alt="Prediction"
              className="img-fluid rounded border"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ResultViewer;
