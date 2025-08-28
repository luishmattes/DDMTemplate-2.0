import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { PageTemplate } from '@/src/templates';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';

export const AboutScreen: React.FC = () => {
  return (
    <PageTemplate title="Sobre este App" subtitle="Resumo rápido">
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ThemedView>
          <ThemedText type="defaultSemiBold" style={styles.heading}>O que este aplicativo faz</ThemedText>
          <ThemedText style={styles.paragraph}>
            Este é um exemplo de aplicativo de lista de tarefas feito com React Native e Expo.
            Permite criar, editar, marcar como concluída, deletar tarefas e salvar os dados localmente usando AsyncStorage.
          </ThemedText>

          <ThemedText type="defaultSemiBold" style={styles.heading}>Principais funcionalidades</ThemedText>
          <ThemedText style={styles.paragraph}>• Criar tarefas com título, descrição e prioridade.</ThemedText>
          <ThemedText style={styles.paragraph}>• Editar e deletar tarefas.</ThemedText>
          <ThemedText style={styles.paragraph}>• Marcar tarefas como concluídas.</ThemedText>
          <ThemedText style={styles.paragraph}>• Persistência local com AsyncStorage.</ThemedText>

          <ThemedText type="defaultSemiBold" style={styles.heading}>Arquitetura</ThemedText>
          <ThemedText style={styles.paragraph}>
            O projeto segue um padrão de Atomic Design com pastas para atoms, molecules, organisms, templates e screens.
          </ThemedText>

          <ThemedText type="defaultSemiBold" style={styles.heading}>Como rodar</ThemedText>
          <ThemedText style={styles.paragraph}>1. npm install{'\n'}2. npm start</ThemedText>

          <ThemedText type="defaultSemiBold" style={styles.heading}>Mais informações</ThemedText>
          <ThemedText style={styles.paragraph}>
            Para ver o README completo do projeto, abra:
          </ThemedText>

          <ExternalLink href="README.md">
            <ThemedText type="link" style={styles.link}>README do Projeto</ThemedText>
          </ExternalLink>
        </ThemedView>
      </ScrollView>
    </PageTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  heading: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 16,
  },
  paragraph: {
    marginBottom: 8,
    fontSize: 15,
    color: '#666',
  },
  link: {
    marginTop: 6,
  },
});
