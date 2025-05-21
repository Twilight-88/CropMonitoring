import React, { useState } from "react";
import CropUpload from "../components/CropUpload";
import ResultViewer from "../components/ResultViewer";
import axios from "axios";

const UploadPage = () => {
  const [uploadResult, setUploadResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileUpload = async (file) => {
    setLoading(true);
    setError("");
    setUploadResult(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/prediction/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadResult(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Error uploading image and fetching result."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Upload Crop Image for Disease Detection</h2>
      <CropUpload onFileUpload={handleFileUpload} />

      {loading && (
        <div className="alert alert-info mt-4" role="alert">
          Processing image, please wait...
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          {error}
        </div>
      )}

      <ResultViewer result={uploadResult} />
    </div>
  );
};

export default UploadPage;
