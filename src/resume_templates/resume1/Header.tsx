
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

function Header (){
  // const test = useSelector((state: any) => state);
  // console.log(test, '-----------HEADER----------------')
  // useEffect(() => {
  //   console.log(personalDetails, '--------header--------')
  // }, [personalDetails])
  
  return (
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>Luke Skywalker</Text>
        <Text style={styles.subtitle}>Jedi Master</Text>
      </View>
      <View style={styles.linkColumn}>
        <Link href="mailto:luke@theforce.com" style={styles.link}>
          luke@theforce.com
        </Link>
      </View>
    </View>
  )
};

export default Header;