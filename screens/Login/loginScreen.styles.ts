import { StyleSheet } from 'react-native';
import { colorCode } from '../../utils/colors.util';

export const loginScreenStyles = StyleSheet.create({
  spacingViewStyle: { height: 80 },
  iconStyle: { textAlign: 'center' },
  textStyle: {
    color: colorCode.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  signInButtonStyle: {
    backgroundColor: colorCode.green,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  signInWithThirdPartyButtonStyle: {
    backgroundColor: colorCode.secondaryBlack,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: colorCode.gray,
    borderWidth: 0.8,
  },
  signInWithThirdPartyTextStyle: {
    fontWeight: '500',
    color: colorCode.white,
    textAlign: 'center',
    flex: 1,
  },
});
