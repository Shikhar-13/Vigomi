// src/IconGrid.jsx
import React from 'react';

const icons = [
    { src: "./assets/html.svg", alt: "HTML5" },
    { src: "./assets/html3.svg", alt: "CSS3" },
    { src: "./assets/js.svg", alt: "JavaScript" },
    { src: "./assets/node js.svg", alt: "TypeScript" },
    { src: "./assets/react.svg", alt: "React" },
    { src: "./assets/techstack-python.svg", alt: "Svelte" },
    { src: "./assets/techstack-java.svg", alt: "Redux" },
    { src: "./assets/techstack-django.svg", alt: "Firebase" },
    { src: "./assets/techstack-mysql.svg", alt: "MySQL" },
    { src: "./assets/techstack-mssql.svg", alt: "MySQL Server" },
    { src: "./assets/techstack-mongodb.svg", alt: "Node.js" },
    { src: "./assets/techstack-figma.svg", alt: "Python" },
    { src: "./assets/techstack-adobeillustrator.svg", alt: "Java" },
    { src: "./assets/techstack-adobeindesign.svg", alt: "Django" },
    { src: "./assets/techstack-adobephotoshop.svg", alt: "AWS" },
    { src: "./assets/techstack-adobexd.svg", alt: "GCP" },
    { src: "./assets/techstack-canva.svg", alt: "Azure" },
];

const IconGrid = () => {
    return (
        <div className="container mx-auto p-4">
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {icons.map((icon, index) => (
                    <img key={index} src={icon.src} alt={icon.alt} className="icon" />
                ))}
            </div>
        </div>
    );
}

export default IconGrid;

