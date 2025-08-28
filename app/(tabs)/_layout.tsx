import { Tabs } from 'expo-router';
import React, { createContext, useContext, useState } from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LoginScreen } from '@/src/screens/LoginScreen';

const AuthContext = createContext<{ logged: boolean; setLogged: (v: boolean) => void }>({ logged: false, setLogged: () => {} });
export const useAuth = () => useContext(AuthContext);

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [logged, setLogged] = useState(false);

  if (!logged) {
    return <LoginScreen onLoginSuccess={() => setLogged(true)} />;
  }

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}>
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
      </Tabs>
    </AuthContext.Provider>
  );
}