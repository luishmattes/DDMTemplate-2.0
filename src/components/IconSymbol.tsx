import React from 'react';
import { Text } from 'react-native';

type Props = {
  name?: string;
  size?: number;
  color?: string;
};

export function IconSymbol({ name, size = 24, color = '#000' }: Props) {
  // Mapeamento simples para emojis — ajuste conforme preferir
  const map: Record<string, string> = {
    'checklist': '✅',
    'list.bullet': '📋',
    'plus.circle': '➕',
    'plus.circle.fill': '➕',
    'house.fill': '🏠',
  };
  const char = map[name || ''] || '🔹';
  return (
    <Text style={{ fontSize: size, color }}>{char}</Text>
  );
}

export default IconSymbol;