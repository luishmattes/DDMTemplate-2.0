import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre este projeto</Text>

      <Text style={styles.sectionTitle}>Objetivo</Text>
      <Text style={styles.paragraph}>
        Este projeto é um template de gerenciamento de tarefas com abas para:
        {"\n"}• Minhas Tarefas{"\n"}• Nova Tarefa{"\n"}• Sobre
      </Text>

      <Text style={styles.sectionTitle}>Tecnologias</Text>
      <Text style={styles.paragraph}>
        React / React Native (Expo){"\n"}
        expo-router{"\n"}
        TypeScript
      </Text>

      <Text style={styles.sectionTitle}>Como rodar</Text>
      <Text style={styles.paragraph}>
        1. npm install{"\n"}
        2. npm start (ou expo start){"\n"}
        3. Abra no emulador ou no navegador (localhost)
      </Text>

      <Text style={styles.sectionTitle}>Observações</Text>
      <Text style={styles.paragraph}>
        Ajuste imports e estilos conforme sua organização de projeto.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  paragraph: {
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
  },
});