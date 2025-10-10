/* ===== src/components/Loader.js ===== */
import React from 'react';
import '../styles/Index.css';

export default function Loader({ visible }) {
    if (!visible) return null;

    const base = import.meta.env.BASE_URL; // ruta base dinámica
    const frutas = [
        `${base}Imagenes/Imagenes_de_carga/manzana1.png`,
        `${base}Imagenes/Imagenes_de_carga/frutilla1.png`,
        `${base}Imagenes/Imagenes_de_carga/naranja1.png`
    ];

    return (
        <div id="loader" className="loader-overlay">
            <div className="loader-content">
                <span className="loader-text">Cargando</span>
                <div className="loader-dots">
                    {frutas.map((src, i) => (
                        <img key={i} src={src} alt={`Fruta ${i + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
