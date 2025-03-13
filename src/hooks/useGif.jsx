import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async (tag) => {
        setLoading(true);
        try {
            const url = tag
                ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
                : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

            const output = await axios.get(url);
            const imageSource = output.data.data.images.downsized_large.url;
            setGif(imageSource);
        } catch (error) {
           toast.error("Error fetching GIF")
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData('random');
    }, [tag]); // Re-fetch when the tag changes

    return { gif, loading, fetchData };
};

export default useGif;
