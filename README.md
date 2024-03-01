# Murga Marvel App
Puedes revisar un preview del deploy de esta App en el siguiente link
[https://murgamarvel.vercel.app/](https://murgamarvel.vercel.app/)

Consiste en una pequeña app que obtiene información de la Marvel API (https://gateway.marvel.com/v1/public/characters). Cuenta con un buscador para filtrar los personajes previamente recuperados de la API, una página para consultar los favoritos y una página de detalle con información básica del heroe y sus respectivos primeros 20 comics.

Esta app está construida con Next.js 14 para el renderizado del lado del servidor (SSR) y React Context para la gestión del estado global.

## Setup
Primero deberemos instalar las respectivas dependencias con el comando
```bash
npm install
```
Luego podremos ejecutar la app en modo desarrollo o en modo producción con sus respectivas optimizaciones
```bash
#probar en modo desarrollo
npm run dev
#///////////

#Para hacer un build de la app
npm run build
#luego corremos esta build en modo producción
npm run start
```
Por último, accede a la aplicación en tu navegador en `http://localhost:3000`.

## Características

- **Renderizado del Lado del Servidor**: Utiliza Next.js 14 para el renderizado del lado del servidor.
- **Gestión Global del Estado**: Gestiona el estado global utilizando Context de React, haciendo seguimiento de los likes a los personajes en tiempo real. Es capaz de persistir los datos por medio del Session Storage del navegador
- **Integración con Marvel API**: Obtiene datos de la API de Marvel para mostrar información de personajes y cómics.
- **Diseño Responsivo**: La aplicación está diseñada para ser completamente receptiva, proporcionando una experiencia sin problemas en todos los dispositivos.
- **Accesibilidad**: Garantiza que se cumplan los estándares de accesibilidad para todos los usuarios.
- **Componentes Personalizados**: Todos los componentes están creados a medida sin depender de bibliotecas de componentes de terceros.

## Estructura de Carpetas

```
main/
│
├── app/                 # App Folder
    ├── [character]/     # Página/Ruta de detalle de personaje (/[characterId]) (Static Generated)
    ├── context          # React Context / Estado Global para hacer seguimiento de los likes a los personajes
    ├── favorites/       # Página/Ruta de favoritos (/favorites) (Static Generated)
    ├── lib/             # Carpeta con archivo de servicios usados por la app (fetching de datos / hooks)
    ├── ui/              # Carpeta con los componentes y estilos usados por la app
    ├── layout.js        # Archivo de componente Layout que envuelve toda la app
    ├── page.js          # Página/Ruta de la vista principal de la app (/) (Server Side Rendered)
    └── README.md        # Documentación del proyecto
```

 y
## API-REST

- URL Base: [https://gateway.marvel.com/v1/public/characters](https://gateway.marvel.com/v1/public/characters)

## Descripción de Vistas

### Lista de Personajes

- Muestra una lista de personajes basada en la API de Marvel.
- Permite buscar personajes por nombre previamente recuperados de la API.
- Permite a los usuarios agregar personajes a favoritos.

### Detalles del Personaje

- Muestra información detallada sobre un personaje específico.
- Incluye imagen del personaje, título, descripción y una lista de los primeros 20 cómics asociados al personaje.

## Tecnologías Utilizadas

- **React**: Versión 18.
- **NextJS**: Versión 14.1
- **CSS**: Estilos personalizados utilizando CSS y CSS Modules (NextJS).
- **Gestión del Estado**: ContextAPI de React para la gestión del estado.
- **Pruebas**: Implementación de pruebas utilizando Jest.

