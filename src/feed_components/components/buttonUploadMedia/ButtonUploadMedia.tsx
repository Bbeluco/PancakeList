import React, {useEffect} from 'react';
import {TouchableOpacity, View, Text, Button, Image} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
  DirectoryPickerResponse,
  isCancel,
  isInProgress,
} from 'react-native-document-picker';

function ButtonUploadMedia(): JSX.Element {
  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();

  //   useEffect(() => {
  //     console.log(JSON.stringify(result, null, 2));
  //   }, [result]);

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  return (
    <View>
      <Button
        title="ESCOLHER IMAGEM"
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            });
            setResult([pickerResult]);
          } catch (e) {
            handleError(e);
          }
        }}
      />
      <RenderImage uriLocation={result} />
    </View>
  );
}

function RenderImage({uriLocation}) {
  if (uriLocation) {
    // return <Image source={{uri: uriLocation[0].fileCopyUri}} />;
    return (
      <Image
        source={{
          uri: 'content://com.android.providers.media.documents/document/image:1000000034',
        }}
      />
    );
  }
  return null;
}

export default ButtonUploadMedia;
