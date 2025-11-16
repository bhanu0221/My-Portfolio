
import React from "react";
const imageNames = [
    "20250313_055726000_iOS_11zon.jpg",
    "IMG-20230306-WA0024.jpg",
    "IMG-20230525-WA0034.jpg",
    "IMG-20230728-WA0019.jpg",
    "IMG-20230919-WA0008.jpg",
    "IMG-20240206-WA0001.jpg",
    "IMG-20250609-WA0005.jpg",
    "IMG-20250609-WA0015.jpg",
    "IMG-20250611-WA0023_11zon.jpg",
    "IMG_20230213_124812.jpg",
    "IMG_20231021_224216975_11zon.jpg",
    "IMG_20240204_111715_144.jpg",
    "IMG_20240204_144714887_11zon.jpg",
    "IMG_20240204_144744472_11zon.jpg",
    "IMG_20240204_145831920_11zon.jpg",
    "WhatsApp Image 2023-05-26 at 4.21.16 PM.jpeg",
    "compressed_IMG_20230305_182039.jpg",
    "compressed_IMG_20231021_224244575.jpg",

];

export default function Memories() {
    return (
        <div className="p-6 bg-gray-800">
            <h2 className="text-2xl font-bold text-center mb-6 text-amber-500">📸 My College Memories</h2>
            <p style={{textAlign:"center", fontStyle:"italic", color:"white"}}>Welcome to my memories page! Here, I share some of the best moments that have shaped my journey.</p>
            
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {imageNames.map((photos, index) => (
                    <div
                        key={index}
                        className="rounded-4xl overflow-hidden transition hover:shadow-2xl hover:scale-[1.02]"
                    >
                        <img
                            src={`/memories/${photos}`} // public/memories/
                            alt={`memory-${index}`}
                            className="w-full h-80 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
