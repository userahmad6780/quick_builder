import {
  Text,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
  PageProps,
} from '@react-pdf/renderer';

import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import { PropsWithChildren } from 'react';
import { JSX } from 'react/jsx-runtime';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
});

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const CustomResume2 = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Page> & Readonly<PropsWithChildren<PageProps>>) => (
  <Document>
    <Page {...props} style={styles.page}>
      <Header />
      <View style={styles.leftColumn}>
        <Skills />
        <Education />
      </View>
      <View style={styles.container}>
        <Experience />
      </View>
      <Text style={styles.footer}>This IS the candidate you are looking for</Text>
    </Page>
  </Document>
);

export default CustomResume2;