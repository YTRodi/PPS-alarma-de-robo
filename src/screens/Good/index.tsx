import { useMemo } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { CSS } from '../../../stitches.config';
import { Button, Flex, Image, Sub2 } from '../../components';

const testImage = require('../../../assets/up.jpg');
const MOCK = new Array(15).fill({
  id: 'fake_id_123',
  url: testImage,
  votes: 10,
  author: 'Maggie',
  date: '21 abril 2022',
});

function Good() {
  const { height, width } = useWindowDimensions();
  const css: CSS = useMemo(
    () => ({
      height: height / 3,
      width: width / 2 - 4,
      borderRadius: '$m',
    }),
    []
  );
  const cssLikeButton: CSS = useMemo(
    () => ({
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 1,
    }),
    []
  );
  const cssContainerImage: CSS = useMemo(
    () => ({ position: 'relative', margin: 2 }),
    []
  );

  return (
    <Flex css={{ position: 'relative' }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Flex wrap='wrap'>
          {MOCK.map((image, index) => {
            return (
              <Flex
                key={index}
                direction='column'
                align='center'
                css={cssContainerImage}
              >
                <Flex css={cssLikeButton}>
                  <Button
                    text='Like'
                    onPress={() => console.log('like', image.id)}
                  />
                </Flex>
                <Image source={image.url} {...{ css }} />
                <Sub2>{image.votes} votos</Sub2>
                <Sub2>Autor: {image.author}</Sub2>
                <Sub2>{image.date}</Sub2>
              </Flex>
            );
          })}
        </Flex>
      </ScrollView>

      <Flex
        justify='center'
        css={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      >
        {/* 
        // TODO: crear componente FabButton 
        */}
        <Button
          full
          text='Abrir cámara'
          onPress={() => console.log('Abrir cámara')}
        />
      </Flex>
    </Flex>
  );
}

export default Good;
