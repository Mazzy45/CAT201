import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { topTouristSpots } from './touristSpotsData';
import './DetailsPage.css';

const DetailsPage = () => {
    const { id } = useParams(); // Get the id from the route
    const touristSpot = topTouristSpots.find((spot) => spot.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!touristSpot) {
        return (
            <div className="not-found">
                <h2>Oops! Tourist spot not found.</h2>
                <p>Return to the homepage to explore other attractions.</p>
            </div>
        );
    }

    // If a video exists, place it at the first position, followed by the images
    const sliderContent = touristSpot.video
        ? [touristSpot.video, ...touristSpot.images]  // Video first, then images
        : [...touristSpot.images];  // Only images if no video

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === sliderContent.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? sliderContent.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="details-container">
            <h1 className="title">{touristSpot.name}</h1>

            <div className="slider">
                <button onClick={handlePreviousImage} className="slider-button">
                    ◀
                </button>

                {/* Render video if it's the first element, then render images */}
                {sliderContent[currentImageIndex].endsWith('.mp4') ? (
                    <div className="video-container">
                        <video controls autoPlay>
                            <source
                                src={sliderContent[currentImageIndex]}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        {touristSpot.videoCredit && (
                            <div className="video-credit">
                                <p>{touristSpot.videoCredit}</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <img
                        src={sliderContent[currentImageIndex]}
                        alt={`Slide ${currentImageIndex + 1}`}
                        className="slider-image"
                    />
                )}

                <button onClick={handleNextImage} className="slider-button">
                    ▶
                </button>
            </div>

            <div className="details">
                {/* Render description as two paragraphs */}
                <p className="description">{touristSpot.longDescription.paragraph1}</p>
                <p className="description">{touristSpot.longDescription.paragraph2}</p>

                {/* New Details Section without Activities */}
                <ul className="info-list">
                    <li><strong>Ticket Info:</strong></li>
                    <ul>
                        {touristSpot.ticketInfo.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                    <li><strong>Operating Days:</strong> {touristSpot.operatingDays}</li>
                    <li><strong>Operating Hours:</strong> {touristSpot.operatingHours}</li>
                    <li><strong>Contact Number:</strong> {touristSpot.contactNumber}</li>
                    <li><strong>Address:</strong> {touristSpot.address}</li>
                </ul>

                {/* Website Link Section */}
                {touristSpot.websiteLink && (
                    <div className="website-link">
                        <a href={touristSpot.websiteLink} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailsPage;
