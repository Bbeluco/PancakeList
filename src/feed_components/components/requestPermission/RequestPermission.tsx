import {Button, PermissionsAndroid} from 'react-native';

// function to request permission
const requestStoragePermission = async () => {
  try {
    // const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //   {
    //     title: 'Permissão para visualizar arquivos',
    //     message:
    //       'Deseja permitir que o app visualize arquivos como fotos, videos e documentos',
    //     buttonNeutral: 'Perguntar depois',
    //     buttonNegative: 'Cancelar',
    //     buttonPositive: 'OK',
    //   },
    // );
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log(granted);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the EXTERNAL_STORAGE');
    } else {
      console.log('EXTERNAL_STORAGE permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

function RequestPermission(): JSX.Element {
  return (
    <Button title="request permission" onPress={requestStoragePermission} />
  );
}

export default RequestPermission;
