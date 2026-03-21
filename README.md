Manutenpul S.r.l.s. - Prototipo Web Corporativo

Este repositorio contiene el prototipo moderno y funcional del sitio web para Manutenpul, una empresa líder en Facility Management y Limpieza Industrial con operaciones en Italia y Perú. El proyecto ha sido desarrollado con un enfoque en rendimiento, escalabilidad y una experiencia de usuario premium.

🚀 Características Principales

Sistema Multilingüe Real: Soporte completo para Italiano (IT), Español (ES) e Inglés (EN) gestionado mediante Context API.

Gestión de Certificaciones Dinámicas: Páginas de detalle para ISO 9001, ISO 14001 e ISO 45001 generadas dinámicamente desde archivos JSON.

Modo Oscuro/Claro: Implementado con next-themes y Tailwind CSS.

Diseño 100% Responsivo: Optimizado para móviles, tablets y escritorio.

Arquitectura Limpia: Separación clara entre datos (JSON), lógica de estado (Context) y componentes visuales.

🛠️ Tecnologías Utilizadas

Framework: React 18

Herramienta de Construcción: Vite (Ultra rápido)

Lenguaje: TypeScript

Estilos: Tailwind CSS

Iconografía: Lucide React

Enrutamiento: React Router DOM v7

Gestión de Temas: Next Themes

📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

Node.js (Versión 22 recomendada)

NPM

🛠️ Instalación y Ejecución

Sigue estos pasos para correr el proyecto en tu máquina local:

Clonar el repositorio:

git clone https://github.com/Studios-TKOH/MANUTENPULprototipo.git

Entrar en la carpeta del proyecto:

cd manutenpul-prototype

Instalar las dependencias:

npm install

Iniciar el servidor de desarrollo:

npm run dev

Visualizar el proyecto:
Una vez ejecutado el comando anterior, la terminal te dará una dirección local (usualmente http://localhost:5173). Abre esa URL en tu navegador.

📂 Estructura del Proyecto

src/app/pages: Contiene las vistas principales (Home, Certificaciones, etc.).

src/app/components: Componentes reutilizables (Header, Footer, Grillas).

src/data: Archivos JSON que contienen todos los textos y datos técnicos de las ISO.

src/context: Lógica de los proveedores de Idioma y Tema.

src/types: Definiciones de interfaces para TypeScript.

📖 Notas de Uso

Cambio de Idioma: Puedes probar la reactividad del sitio cambiando el idioma en el selector del Header; todos los textos, incluyendo los detalles técnicos de las certificaciones, se actualizarán instantáneamente.

Certificaciones: Para ver el diseño especial de la "Triple Certificación", navega en el menú a ISO 45001. Para ver los marcos de documentos oficiales, navega a ISO 9001 o ISO 14001.

Desarrollado como prototipo de alta fidelidad para Manutenpul S.r.l.s.
