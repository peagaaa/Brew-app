// Padrão de nomeclatura.
// Arquivo que irá conter de forma global em tods as telas criadas o sistema de navegação que for definido, Stack ou Tabs.
// Dá para enviar parametros.

import { Stack, Tabs } from 'expo-router';

export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Brew Receitas sem compilação",
                    tabBarLabel:"Início",
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil do usuário",
                    tabBarLabel:"Perfil",
                }}
            />
            <Tabs.Screen
                name="saves"
                options={{
                    title: "Receitas salvas",
                    tabBarLabel:"Salvos",
                }}
            />
        </Tabs>
    );
}