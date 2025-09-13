# 🌍 Traductor de Voz - App Móvil Nativa

Una aplicación móvil nativa desarrollada con React Native y Expo que permite traducir texto entre múltiples idiomas y escuchar la pronunciación.

## 📱 Características

- ✨ **Traducción en tiempo real** entre 13 idiomas
- 🔊 **Text-to-Speech** para escuchar las traducciones
- 🎨 **Interfaz moderna** con gradientes y diseño intuitivo
- 📱 **Multiplataforma** (iOS y Android)
- 🌐 **También funciona en web** para pruebas

## 🌎 Idiomas Soportados

- Español (es)
- Inglés (en)
- Francés (fr)
- Alemán (de)
- Italiano (it)
- Portugués (pt)
- Holandés (nl)
- Ruso (ru)
- Japonés (ja)
- Coreano (ko)
- Chino (zh)
- Árabe (ar)
- Hindi (hi)

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo CLI

### Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/[tu-usuario]/traductor-voz-app.git
cd traductor-voz-app
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Ejecuta el proyecto:**
```bash
# Para desarrollo web
npm run web

# Para móvil (escanea el QR con Expo Go)
npx expo start
```

## 📦 Dependencias Principales

- **React Native** - Framework multiplataforma
- **Expo** - Plataforma de desarrollo
- **expo-speech** - Text-to-Speech nativo
- **expo-linear-gradient** - Gradientes para UI
- **@expo/vector-icons** - Iconos vectoriales

## 🛠️ Scripts Disponibles

```bash
# Iniciar en modo desarrollo
npm start

# Ejecutar en web (para pruebas)
npm run web

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios
```

## 🌐 API de Traducción

La aplicación utiliza la API gratuita de MyMemory para las traducciones:
- **Endpoint:** `https://api.mymemory.translated.net/get`
- **Límite:** 1000 traducciones por día (gratuito)

## 📱 Instalación en Dispositivo

### Android
1. Descarga e instala **Expo Go** desde Google Play Store
2. Ejecuta `npx expo start` en tu terminal
3. Escanea el código QR con Expo Go

### iOS
1. Descarga e instala **Expo Go** desde App Store
2. Ejecuta `npx expo start` en tu terminal
3. Escanea el código QR con Expo Go

## 🏗️ Compilación para Producción

Para crear archivos APK/IPA para distribución:

```bash
# Instalar EAS CLI
npm install -g @expo/eas-cli

# Configurar EAS
eas login
eas build:configure

# Compilar para Android
eas build --platform android

# Compilar para iOS
eas build --platform ios
```

## 📝 Estructura del Proyecto

```
TestTraductor/
├── App.tsx              # Componente principal
├── app.json            # Configuración de Expo
├── package.json        # Dependencias del proyecto
├── assets/             # Recursos (iconos, imágenes)
└── README.md          # Este archivo
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ✨ Desarrollado con

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [MyMemory Translation API](https://mymemory.translated.net/)

---

**¡Disfruta traduciendo con tu nueva app móvil! 🌍📱**