import React, { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";

const Home = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="container">
      <LanguageSelector selectedLanguage={language} onLanguageChange={setLanguage} />
      {/* You can pass `language` to CropUpload or other components */}
    </div>
  );
};
