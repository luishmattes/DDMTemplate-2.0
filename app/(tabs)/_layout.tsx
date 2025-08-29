import { Tabs } from 'expo-router';
import React from 'react';
// use import relativo (corrige erro TS2307 se alias '@' não estiver configurado)
import { IconSymbol } from '../../src/components/IconSymbol';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Minhas Tarefas',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={focused ? 30 : 26} 
              name={focused ? "checklist" : "list.bullet"} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Nova Tarefa',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={focused ? 32 : 28} 
              name={focused ? "plus.circle.fill" : "plus.circle"} 
              color={color} 
            />
          ),
        }}
      />

      {/* Nova aba Sobre */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={focused ? 30 : 26}
              name={focused ? "house.fill" : "house.fill"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}