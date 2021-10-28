import React from 'react';
import { useEffect } from 'react';

export default function LazyImg({ name, imgSrc }) {
    let options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver(imageObserver, options);

    function imageObserver(entries, observer) => {
        entries.forEach(entry => {
            console.log(entry);
        });
    }

    useEffect(() => {
        imageObserver()
    }, [])

    return (
        <img />
    )
}
