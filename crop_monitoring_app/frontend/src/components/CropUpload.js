import React, { useState } from "react";
import axios from "axios";

const CropUpload = ({ language = "en" }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("language", language); // Optional for multilingual support

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data.prediction);
    } catch (error) {
      console.error("Prediction failed", error);
      setResult("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <h3 className="text-center mb-3">Upload Crop Image</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>

        {preview && (
          <div className="text-center mb-3">
            <img src={preview} alt="Preview" style={{ maxHeight: "300px" }} />
          </div>
        )}

        <div className="d-grid">
          <button className="btn btn-success" type="submit" disabled={loading}>
            {loading ? "Detecting..." : "Detect Disease"}
          </button>
        </div>
      </form>

      {result && (
        <div className="alert alert-info mt-4 text-center">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default CropUpload;
