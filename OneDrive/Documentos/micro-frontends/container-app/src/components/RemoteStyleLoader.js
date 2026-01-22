import React, { useEffect } from 'react'

const RemoteStyleLoader = ({ remoteName, remoteUrl }) => {
  useEffect(() => {
    // 1. Definimos a URL do CSS baseado no endereço do Remote
    // Nota: No Next.js dev, o CSS geralmente fica em _next/static/css/
    const cssUrl = `${remoteUrl}/_next/static/css/globals.css`;

    // 2. Verifica se o estilo já foi injetado para não duplicar
    if (document.querySelector(`link[href="${cssUrl}"]`)) return;

    // 3. Cria a tag link e injeta no head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    link.type = 'text/css';
    
    document.head.appendChild(link);

    // Opcional: Remove o estilo quando o componente for desmontado
    return () => {
      // document.head.removeChild(link); 
    };
  }, [remoteUrl]);

  return null;
};

export default RemoteStyleLoader;