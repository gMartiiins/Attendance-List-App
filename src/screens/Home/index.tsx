//Importando para usar Textos
//View para empacotar e usar CSS
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home(){
  //useState(colocar sempre em cima das oturas funcoes)
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd(){
    
    if(participants.includes(participantName)){
      if(participants.includes("Gabriel")){
        return Alert.alert("Participante Existe!", "Existe esse Participante");
      }
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
    }
  

  function handleParticipantRemove(name: string){

    Alert.alert("Remover",`Remover ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return(
    <View style={styles.container}>
      
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Terça 29 de Agosto de 2023
      </Text>

      <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        onChangeText={setParticipantName}
        value={participantName}
      />

    	<TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>

   
    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (

        <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)}
        />

      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Nenhum participante cadastrado
        </Text>
      )}
    />
     
    </View>
  )
}
