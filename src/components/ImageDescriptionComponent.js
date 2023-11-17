import React, { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const ImageDescriptionComponent = () => {
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDescriptionRequest = async () => {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }
    const convertImageToBase64 = (image) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result.split(",")[1];
          resolve(base64Data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(image);
      });
    };
    try {
      console.log("Generating...");
      const imageBase64 = await convertImageToBase64(selectedImage);
      const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "What’s in this image?" },
              {
                type: "image_url",
                image_url: {
                  url: `data:image/${selectedImage.type};base64,${imageBase64}`,
                },
              },
            ],
          },
        ],
        max_tokens: 300,
      });
      const generatedText = response.choices[0].message.content;
      console.log("Generated:", generatedText);
      window.alert(generatedText);
      setDescription(generatedText);
    } catch (error) {
      console.error("Error fetching data from OpenAI:", error);
    }
  };

  return (
    <div>
      <h1>Image Description using OpenAI</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
        </div>
      )}
      <button className="text-white" onClick={handleDescriptionRequest}>
        Submit
      </button>
    </div>
  );
};

export default ImageDescriptionComponent;
