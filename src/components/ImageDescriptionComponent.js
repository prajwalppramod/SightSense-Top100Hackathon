import React, { useState } from 'react';
import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI();

const ImageDescriptionComponent = () => {
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleDescriptionRequest = async () => {
        if (!selectedImage) {
            alert('Please upload an image first.');
            return;
        }

        try {
            const prompt = [
                { type: 'text', content: 'Explain the surrounding in the picture.' },
                {
                    type: 'image_url',
                    image_url: {
                        url:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg',
                    },
                },
            ];

            const response = await openai.chat.completions.create({
                model: 'gpt-4-vision-preview',
                messages: [{ role: 'user', content: prompt }],
            });

            // Extract the generated text from the response
            const generatedText = response.choices[0].message.content[0].content;
            setDescription(generatedText);
        } catch (error) {
            console.error('Error fetching data from OpenAI:', error);
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

            <button onClick={handleDescriptionRequest}>Submit</button>

            {description && (
                <div>
                    <h2>Generated Description:</h2>
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default ImageDescriptionComponent;
