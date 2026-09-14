import { View, Text } from 'react-native';
export default function Visi({nama}) {
    return (
      <View>
        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 800 }}>{Visi}</Text>
        <Text style={{ fontSize: 20, textAlign: 'center'}}>
          Menjadi universitas swasta Kristen Masehi Advent Hari Ketujuh 
          yang memperoleh pengakuan secara nasional, dan internasional melalui
          pendidikan dan pengajaran, penelitian, dan pengabdian kepada
          masyarakat yang bermutu dengan dilandasi pada suatu proses pengembangan 
          yang serasi yakni spiritual, intelektual, fisik dan sosial.
         </Text>
      </View>
    );
}