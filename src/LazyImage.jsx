// LazyImage.js
import React, { useEffect, useRef, useState } from 'react';

const LazyImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imageRef} style={{ minHeight: '300px', margin: '20px 0' }}>
      {isVisible ? (
        <img
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
          alt="Banner"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        />
      ) : (
        <div style={{ height: '300px', background: '#eee' }}>Loading image...</div>
      )}
    </div>
  );
};

export default LazyImage;
