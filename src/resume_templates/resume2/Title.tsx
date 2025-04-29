import { ReactNode } from "react";
import { Text, StyleSheet } from '@react-pdf/renderer';

interface Props {
    children?: ReactNode
}   

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

const Title = ({ children } : Props) => <Text style={styles.title}>{children}</Text>;

export default Title;