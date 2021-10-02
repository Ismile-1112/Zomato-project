import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

// component
import PhotoCollection from '../../Components/restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/1/110271/cb9ac8fa88a31867fa96e091581daf0b.jpg?",
        "https://b.zmtcdn.com/data/pictures/chains/1/110271/fe7141486fdb8b7ec00a23981c07c34a.jpg?",
        "https://b.zmtcdn.com/data/pictures/chains/1/110271/3df89cb2491e227b77a719492b33ef44.jpg?"
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                    <ImageViewer
                    src={ photos }
                    currentIndex={ CurrentImg }
                    disableScroll={ false }
                    onClose={ closeViewer }
                    />
            )}
            <div className="flex flex-wrap gap-2">
                {
                    photos.map((photo) => (
                        <PhotoCollection image={photo} openViewer={openViewer} />
                    ))
                }
            </div>
        </>
    );
};

export default Photos;
