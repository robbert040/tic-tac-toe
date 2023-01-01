import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  alert: {
    backgroundColor: 'white',
  },
  alertIcon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 50,
    width: '100%',
  },
  alertText: {
    marginTop: -16,
    marginBottom: 32,
  },
  alertButton: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: '#4CB748',
    marginBottom: 16,
    minWidth: '50%',
    paddingHorizontal: 8,
  },
  alertButtonExit: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    marginBottom: 16,
    minWidth: '50%',
    paddingHorizontal: 8,
  },
  alertButtonText: {
    color: '#FFFFFF',
  },
});

export default styles;
