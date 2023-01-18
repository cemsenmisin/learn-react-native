import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { 
  ApplicationProvider, 
  Layout, 
  Text, 
  Button,
  BottomNavigationTab,
  Icon,
  IconRegistry,
} from '@ui-kitten/components';

const StarIcon = (props) => (<Icon {...props} name='star'/>);

export const BottomNavigationTabSimpleUsageShowcase = () => (
  <BottomNavigationTab
    title='USERS'
    icon={StarIcon}
  />
);

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);
  
  return (
    <Layout style={styles.container}>   
      <Text style={styles.headerText} category='h1'>
        Clever Programmer
      </Text>
      <Text style={styles.paragraphText} category='h4'>
        You clicked the button {counter} times...</Text>
      <Button style={styles.button} onPress={() => setCounter(counter + 1)}>
        Start Learning
        </Button>
    </Layout>
  );
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "auto",
  },
  headerText: {
    marginBottom: 16,
  },

  button: {
    marginTop: 32,
  },
  bottomNavTab: {
    position: "absolute"
    bottom: "23",
  }
});
