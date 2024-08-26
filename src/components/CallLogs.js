import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';

const CallLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    Contacts?.getAll().then(contacts => {
      // This is just a placeholder. In reality, you'd need a native module to get actual call logs
      setLogs(contacts.slice(0, 10).map(contact => ({
        name: contact.givenName,
        number: contact.phoneNumbers[0]?.number || 'Unknown',
        date: new Date().toLocaleString(),
      })));
    });
  }, []);

  return (
    <View>
      <FlatList
        data={logs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.number}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CallLogs;