import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"/>
      { /*<Tabs.Screen name="teste" options={{headerShown: false}}/>*/ } 
      <Tabs.Screen name="feed" options={{ title: 'Feed' }} /> 
    </Tabs>
  );
}