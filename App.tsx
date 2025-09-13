import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Idiomas soportados
const languages = [
  { name: "Español (España)", code: "es-ES" },
  { name: "Inglés (US)", code: "en-US" },
  { name: "Francés", code: "fr-FR" },
  { name: "Alemán", code: "de-DE" },
  { name: "Italiano", code: "it-IT" },
  { name: "Portugués", code: "pt-BR" },
];

export default function App() {
  const [text, setText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('es-ES');
  const [targetLanguage, setTargetLanguage] = useState('en-US');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const translateText = async () => {
    if (!text.trim()) {
      Alert.alert('Error', 'Por favor, escribe un mensaje.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLanguage}|${targetLanguage}`
      );

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      const translated = result.responseData?.translatedText;

      if (!translated) {
        throw new Error("No se pudo obtener la traducción.");
      }

      setTranslatedText(translated);
      await speakText(translated);

    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Error al traducir. Verifica tu conexión.');
    } finally {
      setIsLoading(false);
    }
  };

  const speakText = async (textToSpeak = translatedText) => {
    if (!textToSpeak.trim()) return;

    try {
      setIsSpeaking(true);
      await Speech.speak(textToSpeak, {
        language: targetLanguage,
        pitch: 1.0,
        rate: 0.8,
        onDone: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    } catch (error) {
      console.error('Error de voz:', error);
      setIsSpeaking(false);
    }
  };

  const stopSpeaking = async () => {
    await Speech.stop();
    setIsSpeaking(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <LinearGradient
        colors={['#3B82F6', '#1E40AF']}
        style={styles.gradient}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Ionicons name="language" size={32} color="white" />
            <Text style={styles.headerTitle}>Traductor de Voz</Text>
            <Text style={styles.headerSubtitle}>
              Traduce y escucha en cualquier idioma
            </Text>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            {/* Text Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Escribe tu mensaje aquí..."
                placeholderTextColor="#6B7280"
                multiline
                value={text}
                onChangeText={setText}
                maxLength={500}
              />
            </View>

            {/* Language Selectors */}
            <View style={styles.languageContainer}>
              <Text style={styles.languageLabel}>Idioma de origen: {sourceLanguage}</Text>
              <View style={styles.buttonRow}>
                {languages.map((lang) => (
                  <TouchableOpacity
                    key={`source-${lang.code}`}
                    style={[
                      styles.langButton,
                      sourceLanguage === lang.code && styles.selectedLangButton
                    ]}
                    onPress={() => setSourceLanguage(lang.code)}
                  >
                    <Text style={[
                      styles.langButtonText,
                      sourceLanguage === lang.code && styles.selectedLangButtonText
                    ]}>
                      {lang.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.languageLabel}>Traducir a: {targetLanguage}</Text>
              <View style={styles.buttonRow}>
                {languages.map((lang) => (
                  <TouchableOpacity
                    key={`target-${lang.code}`}
                    style={[
                      styles.langButton,
                      targetLanguage === lang.code && styles.selectedLangButton
                    ]}
                    onPress={() => setTargetLanguage(lang.code)}
                  >
                    <Text style={[
                      styles.langButtonText,
                      targetLanguage === lang.code && styles.selectedLangButtonText
                    ]}>
                      {lang.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Translate Button */}
            <TouchableOpacity
              style={[styles.translateButton, isLoading && styles.buttonDisabled]}
              onPress={translateText}
              disabled={isLoading}
            >
              <LinearGradient
                colors={isLoading ? ['#9CA3AF', '#6B7280'] : ['#3B82F6', '#1E40AF']}
                style={styles.buttonGradient}
              >
                {isLoading ? (
                  <ActivityIndicator color="white" size="small" />
                ) : (
                  <Ionicons name="sparkles" size={20} color="white" />
                )}
                <Text style={styles.buttonText}>
                  {isLoading ? 'Traduciendo...' : 'Traducir y Escuchar'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Result */}
            {translatedText ? (
              <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Traducción:</Text>
                <Text style={styles.resultText}>{translatedText}</Text>
                
                <TouchableOpacity
                  style={[styles.audioButton, isSpeaking && styles.audioButtonActive]}
                  onPress={isSpeaking ? stopSpeaking : () => speakText()}
                >
                  <Ionicons 
                    name={isSpeaking ? "stop" : "play"} 
                    size={20} 
                    color={isSpeaking ? "#EF4444" : "#3B82F6"} 
                  />
                  <Text style={[styles.audioButtonText, isSpeaking && styles.audioButtonTextActive]}>
                    {isSpeaking ? 'Detener' : 'Reproducir'}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Traducción por MyMemory API</Text>
            <Text style={styles.footerText}>Desarrollado y diseñado por P & M DevWeb</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
    textAlign: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    minHeight: 120,
    textAlignVertical: 'top',
  },
  languageContainer: {
    marginBottom: 25,
  },
  languageLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
    marginTop: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  langButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedLangButton: {
    backgroundColor: '#3B82F6',
    borderColor: '#2563EB',
  },
  langButtonText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  selectedLangButtonText: {
    color: 'white',
  },
  translateButton: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonGradient: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  resultContainer: {
    backgroundColor: 'rgba(59, 130, 246, 0.05)',
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
    marginBottom: 20,
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  resultText: {
    fontSize: 16,
    color: '#1F2937',
    lineHeight: 24,
    marginBottom: 15,
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3B82F6',
    alignSelf: 'center',
  },
  audioButtonActive: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  audioButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
  },
  audioButtonTextActive: {
    color: '#EF4444',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginVertical: 2,
  },
});
