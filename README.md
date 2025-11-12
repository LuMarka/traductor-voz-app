# 🌍 Traductor de Voz — App móvil (React Native + Expo)

Este repositorio contiene una aplicación móvil creada con React Native y Expo para traducir texto entre varios idiomas y reproducir la traducción mediante síntesis de voz.

## ✨ Qué hace

- Traduce texto entre idiomas usando un servicio de traducción (MyMemory por defecto)
- Reproduce la traducción con Text-to-Speech (módulo nativo via Expo)
- Interfaz pensada para dispositivos móviles con controles simples y accesibles
- Funciona en modo desarrollo con Expo (Android, iOS y web para pruebas)

## 📱 Características principales

- Traducción de texto con petición a API pública
- Reproducción de audio de la traducción (TTS)
- Selección de idioma de origen y destino mediante pickers
- Indicadores visuales de carga y manejo básico de errores
- Componentes de UI con gradientes y estilos modernos

## 🌐 Enlaces importantes

- Repositorio: https://github.com/LuMarka/traductor-voz-app.git
- Proyecto en Expo: https://expo.dev/accounts/lumarka/projects/TestTraductor
- Panel de builds (Expo / EAS): https://expo.dev/accounts/lumarka/projects/TestTraductor/builds/5ad01541-eaa7-43ec-8bb7-0281624ba525

> Nota: Si hay un APK disponible será accesible desde la sección "Builds" del proyecto en Expo.

## 🎯 Idiomas soportados (ejemplos)

- Español (es)
- Inglés (en)
- Francés (fr)
- Alemán (de)
- Portugués (pt-BR)
- Italiano (it)
- Ruso (ru)
- Japonés (ja)
- Coreano (ko)
- Chino (zh)
- Árabe (ar)
- Hebreo (he) — si está disponible en el motor TTS

> La lista completa y los códigos pueden variar según la implementación del motor de síntesis y la API de traducción.

## � Servicio de Traducción (MyMemory API)

Esta aplicación utiliza **MyMemory Translation API** para realizar las traducciones:

- **¿Qué es?** Servicio gratuito de traducción en línea disponible públicamente
- **Endpoint:** `https://api.mymemory.translated.net/get`
- **Límite gratuito:** 1000 traducciones por día
- **Documentación:** https://mymemory.translated.net/
- **Ventajas:** 
  - No requiere API key (funciona sin autenticación)
  - Rápido y confiable
  - Soporta múltiples idiomas


## �🚀 Instalación rápida

### 📱 Para usuarios normales (Sin conocimientos técnicos)

**Solo 3 pasos para tener la app en tu teléfono:**

1. **Abre este enlace en tu teléfono:**
   ```
   https://expo.dev/accounts/lumarka/projects/TestTraductor/builds/5ad01541-eaa7-43ec-8bb7-0281624ba525
   ```
   - Cópialo en tu navegador (Chrome, Firefox, etc.)

2. **Descarga el archivo:**
   - Busca el botón de descarga (⬇️ o "Download APK")
   - Si el navegador te pregunta, toca "Descargar" o "Aceptar"
   - Espera a que termine (puede tomar unos segundos)

3. **Instala la app:**
   - Se abrirá automáticamente una ventana de "Instalar"
   - Toca el botón **"Instalar"**
   - Espera a que termine (verás una barra de progreso)
   - ¡Listo! La app estará en tu teléfono y podrás abrirla desde el menú de apps

**⚠️ Si tu teléfono dice "No se puede instalar de origen desconocido":**

1. Ve a **Ajustes** del teléfono
2. Busca **Seguridad** o **Privacidad**
3. Encuentra la opción **"Instalar apps de fuentes desconocidas"** o **"Permisos de instalación"**
4. **Actívala para el navegador** que usaste para descargar (ej: Chrome)
5. Intenta instalar de nuevo

> **Nota:** Este permiso es necesario para instalar apps que no vienen de Google Play Store.

---

### 💻 Para desarrolladores (Modo desarrollo con Expo)

Si quieres trabajar con el código fuente o contribuir:

```powershell
# Clonar el repositorio
git clone https://github.com/LuMarka/traductor-voz-app.git
cd traductor-voz-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npx expo start
```

Luego:
- Escanea el código QR con la app **Expo Go** (disponible en Play Store y App Store)
- O escribe **w** en la terminal para probar en navegador web

## 🧩 Scripts (package.json)

- `npm start` — inicia Expo
- `npm run web` — ejecuta la versión web
- `npm run android` — atajo para abrir en Android
- `npm run ios` — atajo para iOS (macOS)

## 🛠️ Build para producción (EAS)

Si quieres generar un APK/IPA para distribución utiliza EAS Build:

```powershell
# instalar EAS CLI si no lo tienes
npm install -g @expo/eas-cli

# login y configuración inicial
eas login
eas build:configure

# construir para Android
eas build --platform android

# construir para iOS (requiere cuenta Apple configurada)
eas build --platform ios
```

## 📦 Dependencias y herramientas usadas

**Framework y Plataforma:**
- React Native + Expo
- TypeScript (tipado estático)

**Librerías principales:**
- `expo-speech` — Text-to-Speech (reproducción de audio)
- `expo-linear-gradient` — Gradientes en la UI
- `@expo/vector-icons` — Iconos vectoriales (Ionicons)
- `@react-native-picker/picker` — Selectores de idioma

**Servicio de traducción:**
- MyMemory Translation API (gratuita, sin API key)

## 🗂️ Estructura del proyecto

```
TestTraductor/
├── App.tsx          # entrada principal
├── app.json         # configuración Expo
├── package.json     # dependencias y scripts
├── assets/          # imágenes, iconos y recursos
└── README.md        # documentación (este archivo)
```

## ✅ Buenas prácticas y notas

- Asegúrate de tener Node.js y npm instalados (v16+ o 18+ recomendados).
- Para builds reproducibles usa EAS y configura credenciales en Expo.
- Si cambias el servicio de traducción, actualiza el archivo de configuración o la lógica de red.

## 🤝 Contribuir

Si quieres aportar:

1. Haz fork del repositorio
2. Crea una rama para tu cambio (`git checkout -b feature/nombre-feature`)
3. Envía commits claros y descriptivos
4. Abre un Pull Request describiendo el cambio


## 👩‍💻 Autor / Contacto

Desarrollado por **Aurea DevWeb**

- LinkedIn: https://www.linkedin.com/in/luisa-markarian-itdeveloper/
- Email: luisamarkarian@gmail.com



