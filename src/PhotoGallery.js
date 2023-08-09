import React, { useState, useEffect } from 'react';

function PhotoGallery() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false); // New loading state

    const API_URL = `https://api.unsplash.com/photos?client_id=1_C5M2HSNJlHtadBKSHTUVwgukkcTdEFGv20_YNF8Fk&page=`;
    
    useEffect(() => {
        // If it's already loading, we don't make another request.
        if (isLoading) return;

        setIsLoading(true); // Set loading to true when starting to fetch

        fetch(API_URL + page)
            .then(res => res.json())
            .then(data => {
                setPhotos(prevPhotos => [...prevPhotos, ...data]);
                setIsLoading(false);  // Reset loading state after data is set
            })
            .catch(error => {
                console.error("Error fetching photos:", error);
                setIsLoading(false); // Reset loading state if an error occurs
            });
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            // Adjusted threshold for loading more content
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
                setPage(prevPage => prevPage + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="photo-grid">
            {photos.map(photo => (
                <div key={photo.id} className="photo">
                    <img src={photo.urls.small} alt={photo.description || "Unsplash Image"} />
                    <p>By: {photo.user.name}</p>
                </div>
            ))}
        </div>
    );
}

export default PhotoGallery;
