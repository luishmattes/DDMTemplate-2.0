import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PageTemplate } from '@/src/templates';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput } from 'react-native';

type LoginScreenProps = {
  onLoginSuccess: () => void;
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    if (email === 'admin@email.com' && senha === '123456') {
      onLoginSuccess();
    } else {
      setLoading(false);
      Alert.alert('Erro', 'E-mail ou senha inválidos.');
    }
  };

  return (
    <PageTemplate title="" scrollable keyboardAvoiding>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Entrar</ThemedText>
        <ThemedText style={styles.subtitle}>
          Acesse sua conta para continuar
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Button
          title={loading ? 'Entrando...' : 'Entrar'}
          onPress={handleLogin}
          disabled={loading}
        />
      </ThemedView>
    </PageTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  form: {
    paddingHorizontal: 20,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});