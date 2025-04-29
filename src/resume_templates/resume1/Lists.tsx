import React, { ReactNode } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface Props {
    children? : ReactNode,
    style?: React.CSSProperties
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Lato',
  },
});

const List = ({ children } : Props) => children;

export const Item = ({ children } : Props) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;