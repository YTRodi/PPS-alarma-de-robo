import { StyleSheet, Text, View } from 'react-native';

interface Props {
  error: Error | null;
}

function FullPageErrorFallback({ error }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* <IconButton
          icon='alert-circle-outline'
          size={50}
          color={Colors.red400}
        /> */}
        {/* TODO: add alert icon */}
        <Text>Oh oh... hubo un problema.</Text>
        <Text>Intenta recargar la app.</Text>
        <Text style={styles.errorDetail}>{error?.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    marginHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorDetail: {
    textAlign: 'center',
  },
});

export default FullPageErrorFallback;
