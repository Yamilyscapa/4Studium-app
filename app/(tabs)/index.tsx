import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
  return (
    <SafeAreaView>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#333',
        padding: 10,
      }}>Home</Text>

      <TouchableOpacity style={{
        backgroundColor: '#007BFF',
        width: '75%',
        margin: 'auto',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
      }} onPress={() => {
        alert('Button Pressed!');
      }}>
        <Text style={{color: "#fff", fontWeight: 500}}>Click me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}