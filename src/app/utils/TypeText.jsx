"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedText = () => {
  useEffect(() => {
    const options = {
      strings: ["Developer"], // Texto a animar
      typeSpeed: 100, // Velocidad de escritura (milisegundos por caracter)
      startDelay: 500, // Retraso antes de empezar (milisegundos)
      showCursor: true, // Mostrar cursor de escritura
      cursorChar: "|", // Carácter del cursor
    };

    const typed = new Typed("#typed-text", options);

    // Importante: Detener la animación al desmontar el componente para evitar problemas de memoria
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h1>
      <span id="typed-text"></span>
    </h1>
  );
};

export default TypedText;
