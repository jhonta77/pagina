# TechSolutions - Corporate Technology Services Website

Una página web corporativa moderna y profesional para servicios de tecnología empresarial, construida con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Navegación Suave**: Scroll suave entre secciones con indicador de sección activa
- **Animaciones Modernas**: Micro-interacciones y efectos hover profesionales
- **Formulario de Contacto**: Integración directa con WhatsApp
- **SEO Optimizado**: Estructura semántica y meta tags apropiados
- **Rendimiento Alto**: Construido con Vite para carga rápida

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd techsolutions-website
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📝 Personalización

### 🏢 Información de la Empresa

#### Cambiar el Nombre de la Empresa
**Archivo**: `src/components/Header.tsx` y `src/components/Footer.tsx`
```typescript
// Línea 45 en Header.tsx y línea 25 en Footer.tsx
<span className="font-bold text-xl">TU_NOMBRE_EMPRESA</span>
```

#### Cambiar el Logo
**Archivo**: `src/components/Header.tsx` y `src/components/Footer.tsx`
- Reemplaza el ícono `<Cpu />` con tu logo personalizado
- O cambia el ícono por otro de Lucide React

### 📧 Información de Contacto

#### Correo Electrónico
**Archivos a modificar**:
1. `src/components/Contact.tsx` (línea 95):
```typescript
<p className="text-blue-100">TU_EMAIL@empresa.com</p>
```

2. `src/components/Footer.tsx` (línea 85):
```typescript
<span className="text-gray-300">TU_EMAIL@empresa.com</span>
```

#### Número de Teléfono
**Archivos a modificar**:
1. `src/components/Contact.tsx` (línea 105):
```typescript
<p className="text-blue-100">+1 (555) TU-NUMERO</p>
```

2. `src/components/Footer.tsx` (línea 90):
```typescript
<span className="text-gray-300">+1 (555) TU-NUMERO</span>
```

#### WhatsApp
**Archivo**: `src/components/Contact.tsx` (línea 25)
```typescript
const whatsappUrl = `https://wa.me/TU_NUMERO_WHATSAPP?text=${encodeURIComponent(message)}`;
```
*Nota: Usa el formato internacional sin espacios ni símbolos (ej: 521234567890)*

#### Ubicación
**Archivos a modificar**:
1. `src/components/Contact.tsx` (línea 115):
```typescript
<p className="text-blue-100">Tu Ciudad, Tu País</p>
```

2. `src/components/Footer.tsx` (línea 95):
```typescript
<span className="text-gray-300">Tu Ciudad, Tu País</span>
```

### 🎨 Personalización Visual

#### Colores Corporativos
**Archivo**: `tailwind.config.js`
```javascript
theme: {
  extend: {
    colors: {
      'primary-blue': '#1e40af',    // Azul principal
      'primary-green': '#059669',   // Verde principal
      'secondary-blue': '#3b82f6',  // Azul secundario
      'secondary-green': '#10b981', // Verde secundario
    }
  }
}
```

#### Gradientes
Los gradientes se pueden personalizar en cada componente:
- `from-blue-600 to-green-600` - Gradiente principal
- `from-blue-900 via-blue-800 to-green-800` - Gradiente de fondo

### 📄 Contenido

#### Título Principal
**Archivo**: `src/components/Hero.tsx` (línea 25)
```typescript
<h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
  Tu Título Principal con{' '}
  <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
    Palabras Destacadas
  </span>
</h1>
```

#### Descripción Principal
**Archivo**: `src/components/Hero.tsx` (línea 32)
```typescript
<p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
  Tu descripción de la empresa aquí...
</p>
```

#### Servicios
**Archivo**: `src/components/Services.tsx`
Modifica el array `services` (línea 6) para cambiar:
- `title`: Nombre del servicio
- `subtitle`: Subtítulo del servicio
- `description`: Descripción principal
- `tools`: Lista de herramientas/características
- `example`: Ejemplo práctico
- `gradient`: Colores del gradiente

### 🔗 Redes Sociales

**Archivo**: `src/components/Footer.tsx` (línea 20)
```typescript
const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/tu-pagina' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/tu-cuenta' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/tu-empresa' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/tu-cuenta' },
];
```

### 📱 Configuración del Formulario

#### Campos del Formulario
**Archivo**: `src/components/Contact.tsx` (línea 6)
Modifica el estado `formData` para agregar o quitar campos:
```typescript
const [formData, setFormData] = useState({
  nombre: '',
  email: '',
  telefono: '',
  empresa: '',
  mensaje: '',
  // Agrega más campos aquí si es necesario
});
```

#### Procesamiento del Formulario
**Archivo**: `src/components/Contact.tsx` (línea 18)
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Aquí puedes agregar la lógica para enviar el formulario
  // Por ejemplo, enviar a un servicio de email o API
  console.log('Form submitted:', formData);
};
```

### 🌐 SEO y Meta Tags

#### Título de la Página
**Archivo**: `index.html` (línea 6)
```html
<title>Tu Empresa - Servicios de Tecnología</title>
```

#### Meta Descripción
Agrega en `index.html` dentro del `<head>`:
```html
<meta name="description" content="Tu descripción de la empresa para SEO">
<meta name="keywords" content="tecnología, automatización, análisis de datos, IA">
```

### 🖼️ Gestión de Imágenes y Videos

La mayoría de los recursos visuales se gestionan desde la carpeta `src/assets`.

#### Cambiar el Logo de la Marca de Agua

1.  **Reemplaza el archivo**: Coloca tu nuevo logo en `src/assets/watermark-logo.png`. Asegúrate de que el nombre del archivo sea el mismo.
2.  **Ajusta la opacidad (opcional)**: 
    **Archivo**: `src/index.css`
    ```css
    .app-container::before {
      /* ... otras propiedades ... */
      opacity: 0.1; /* Cambia este valor (0.0 a 1.0) para ajustar la visibilidad */
    }
    ```

#### Cambiar los Iconos de los Servicios

Los iconos provienen de la librería [Lucide React](https://lucide.dev/).

**Archivo**: `src/components/Services.tsx`

1.  **Importa un nuevo icono**: Busca un icono en la web de Lucide y añádelo a las importaciones.
    ```tsx
    import { Zap, BarChart3, Smartphone, /* ... */, NuevoIcono } from 'lucide-react';
    ```
2.  **Asigna el icono al servicio**: En el array `services`, cambia la propiedad `icon` del servicio que quieras modificar.
    ```tsx
    {
      id: 'automatizacion',
      icon: NuevoIcono, // <-- Aquí se cambia
      title: 'Automatización',
      // ...
    },
    ```

#### Añadir un Video (Ej. de YouTube)

Para incrustar un video en cualquier sección, sigue estos pasos:

1.  **Ve a YouTube**: Abre el video que quieres añadir y haz clic en "Compartir" -> "Insertar".
2.  **Copia el código `<iframe>`**: Copia el código HTML que te proporciona YouTube.
3.  **Pega el código en tu componente**: Abre el archivo `.tsx` de la sección donde quieres el video (ej. `src/components/Hero.tsx`) y pega el código del `<iframe>`. Asegúrate de que tenga las clases de Tailwind CSS necesarias para que sea responsivo.

**Ejemplo de un video responsivo**:
```tsx
<div className="aspect-w-16 aspect-h-9">
  <iframe 
    src="https://www.youtube.com/embed/TU_ID_DE_TU_VIDEO" 
    title="Título del Video"
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>
```
*Nota: Para que `aspect-w-16` y `aspect-h-9` funcionen, puede que necesites instalar el plugin de aspect-ratio para Tailwind: `npm install @tailwindcss/aspect-ratio` y añadirlo en `tailwind.config.js`.* 


## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

### Despliegue en Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `dist`

### Despliegue en Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección de inicio
│   ├── Services.tsx    # Secciones de servicios
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Pie de página
├── App.tsx            # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🎯 Funcionalidades Adicionales

### Agregar Google Analytics
1. Instala: `npm install gtag`
2. Agrega el código de tracking en `index.html`
3. Configura eventos en los componentes

### Agregar Animaciones Adicionales
1. Instala: `npm install framer-motion`
2. Importa y usa en los componentes que necesites

### Integrar con CMS
Para contenido dinámico, considera integrar con:
- Strapi
- Contentful
- Sanity

## 🐛 Solución de Problemas

### Error de Dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problemas de Build
```bash
npm run lint
npm run build
```

### Problemas de Estilos
Verifica que Tailwind CSS esté configurado correctamente en `tailwind.config.js`

## 📞 Soporte

Si necesitas ayuda adicional con la personalización:
1. Revisa la documentación de [React](https://reactjs.org/)
2. Consulta la documentación de [Tailwind CSS](https://tailwindcss.com/)
3. Revisa los iconos disponibles en [Lucide React](https://lucide.dev/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🔗 Gestión de Rutas de Servicios

Para añadir una nueva página de detalle para un servicio y enlazarla desde la sección de "Nuestros Servicios", sigue estos pasos:

### 1. Crear la Nueva Página del Servicio

Crea un nuevo archivo para tu página en la carpeta `src/pages/`. Por ejemplo, para un servicio de "Análisis de Datos":

**Archivo**: `src/pages/AnalisisPage.tsx`
```tsx
import React from 'react';

const AnalisisPage: React.FC = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Análisis Profesional de Datos</h1>
        <p className="text-xl text-gray-600">
          Aquí puedes detallar toda la información sobre el servicio de análisis de datos.
        </p>
      </div>
    </div>
  );
};

export default AnalisisPage;
```

### 2. Registrar la Nueva Ruta

Abre el archivo principal de rutas y añade la nueva ruta para que la aplicación sepa qué componente mostrar.

**Archivo**: `src/App.tsx`

Importa la página que acabas de crear:
```tsx
import AnalisisPage from './pages/AnalisisPage';
```

Añade la nueva `<Route>` dentro del componente `<Routes>`:
```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/servicios/automatizacion" element={<AutomatizacionPage />} />
  {/* --- Añade tu nueva ruta aquí --- */}
  <Route path="/servicios/analisis" element={<AnalisisPage />} />
</Routes>
```

### 3. Enlazar desde el Cuadro de Servicio

Finalmente, modifica el componente de servicios para que el cuadro correspondiente dirija a la nueva ruta.

**Archivo**: `src/components/Services.tsx`

Primero, asegúrate de importar `Link` de `react-router-dom`:
```tsx
import { Link } from 'react-router-dom';
```

Luego, busca el servicio que quieres enlazar (en este caso, el que tiene el `id: 'analisis'`) y envuelve el bloque visual con un componente `<Link>`.

**Ejemplo**:
```tsx
// Dentro del .map de los servicios, cuando encuentres el servicio de 'analisis'

<div className="flex-1 max-w-md">
  <Link to="/servicios/analisis">
    <div className={`bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
      {/* ... el resto del contenido del cuadro ... */}
    </div>
  </Link>
</div>
```

Repite estos pasos para cada nuevo servicio que quieras añadir.

---

**¡Tu sitio web está listo para ser personalizado y desplegado!** 🎉