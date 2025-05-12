/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.sectionContainer, {marginTop: 0}]}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [vpnStatus, setVpnStatus] = React.useState('disconnected'); // 'disconnected', 'connecting', 'connected', 'disconnecting'
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  const toggleVpn = async () => {
    if (vpnStatus === 'disconnected') {
      setVpnStatus('connecting');
      // TODO: Integrate vpnclient-engine-react-native connect function here
      // Example: await connectVpn();
      // setVpnStatus('connected'); // Set to connected on success
      // Handle errors and revert state if connection fails
    } else if (vpnStatus === 'connected') {
      setVpnStatus('disconnecting');
      // TODO: Integrate vpnclient-engine-react-native disconnect function here
      // Example: await disconnectVpn();
      // setVpnStatus('disconnected'); // Set to disconnected on success
      // Handle errors and revert state if disconnection fails
    }
  };

  // TODO: Consider adding a useEffect to listen for VPN state changes from the library
  // and update the vpnStatus state accordingly.


  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={backgroundStyle}>
        <View style={{paddingRight: safePadding}}>
          <Header/>
        </View>
        <View style={{marginHorizontal: safePadding, marginBottom: 20}}>
           <Button title={vpnStatus === 'connected' ? 'Disconnect VPN' : 'Connect VPN'} onPress={toggleVpn} />
           {vpnStatus !== 'disconnected' && <Text style={{textAlign: 'center', marginTop: 10}}>Status: {vpnStatus}</Text>}
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
