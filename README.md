# Boda Shirley & Diego - Invitación Religiosa

Una invitación de boda con diseño religioso, gótico y católico, optimizada para dispositivos móviles.

## 🎨 Diseño

### Estilo Visual
- **Tema**: Religioso, gótico y católico
- **Paleta de colores**: Negro, dorado (amarillo), blanco
- **Enfoque**: Mobile-first design
- **Estilo**: Solemne y elegante

### Tipografías
- **Títulos**: Gothic Title (UnifrakturMaguntia) - Fuente gótica para títulos principales
- **Subtítulos**: Religious Subtitle (CrimsonText Bold) - Para subtítulos y elementos importantes
- **Body Text**: Religious Body (CrimsonText Regular) - Para texto de lectura

## 📱 Características

### Header
- **Imagen**: foto1.jpeg de la carpeta bodaF&S
- **Estilo**: Fixed header con efecto de blur
- **Navegación**: Menú móvil con estilo religioso
- **Animaciones**: Efectos de entrada suaves y elegantes

### Secciones Principales
1. **Invitación**: Detalles de la ceremonia religiosa y celebración civil
2. **Fecha**: Countdown hasta el día de la boda
3. **Galería**: Momentos especiales de la pareja
4. **Fiesta**: Información de la celebración
5. **Regalos**: Lista de regalos
6. **Hospedaje**: Información de alojamiento
7. **Confirmación**: Formulario de asistencia

### Elementos Religiosos
- Versículos bíblicos apropiados
- Símbolos religiosos decorativos
- Efectos de iluminación dorada
- Bordes y decoraciones góticas

## 🛠 Tecnologías

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Fuentes**: Google Fonts (CrimsonText) + Fuentes góticas personalizadas
- **Imágenes**: Next.js Image Optimization

## 📁 Estructura de Archivos

```
bodaFyS/
├── app/
│   ├── page.js              # Página principal
│   ├── globals.css          # Estilos globales y fuentes
│   └── layout.js            # Layout principal
├── components/
│   ├── Header.jsx           # Header con navegación
│   ├── MobileNav.jsx        # Navegación móvil
│   ├── Invitation/          # Componente de invitación
│   ├── Date/                # Componente de fecha y countdown
│   ├── Gallery/             # Galería de fotos
│   ├── religious-styles.css # Estilos religiosos específicos
│   └── components.css       # Estilos generales
├── public/
│   ├── bodaF&S/             # Imágenes de la boda
│   │   ├── foto1.jpeg       # Imagen principal del header
│   │   ├── foto2.jpeg       # Imagen de galería
│   │   ├── foto3.jpeg       # Imagen de galería
│   │   └── Invitación.pdf   # PDF con información
│   └── fonts/
│       └── gothic/          # Fuentes góticas
└── tailwind.config.js       # Configuración de Tailwind
```

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

## 📋 Información de la Boda

### Ceremonia Religiosa
- **Fecha**: Sábado 15 de Noviembre de 2025
- **Hora**: 19:00 horas
- **Lugar**: Capilla María Auxiliadora
- **Dirección**: Presbítero Joannas y Aristóbulo del Valle, Urdinarrain, Entre Ríos

### Celebración Civil y Fiesta
- **Fecha**: Sábado 15 de Noviembre de 2025
- **Hora**: 20:30 horas
- **Lugar**: Salón "La Lidia"
- **Dirección**: 743 Dr. Armando H. Zerolli, Urdinarrain, Entre Ríos

## 🎯 Características Técnicas

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados para dispositivos móviles
- Navegación adaptativa

### Performance
- Optimización de imágenes con Next.js
- Lazy loading de componentes
- Animaciones optimizadas

### Accesibilidad
- Contraste adecuado para lectura
- Navegación por teclado
- Textos alternativos en imágenes

## 📞 Contacto

Desarrollado por [Waisten Programación](https://www.waistenprogramacion.com.ar/)

---

*"Lo que Dios ha unido, que no lo separe el hombre" - Marcos 10:9*
