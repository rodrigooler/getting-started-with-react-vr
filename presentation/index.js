// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Link,
  Fill,
  Layout,
  Appear,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  github: require('../assets/github.svg'),
  twitter: require('../assets/twitter.svg'),
};

preloader(images);

const theme = createTheme(
  {
    primary: '#2D2D2D',
    secondary: '#1574D4',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={10} fit caps lineHeight={1} textColor="secondary" bold>
            React VR
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={1} fit bold>
            Create amazing 360 and VR content using React
          </Text>
          <Layout style={{ marginTop: 100, justifyContent: 'space-between' }}>
            <Fill>
              <Text textColor="accent" style={{ textAlign: 'left' }}>
                Rodrigo Oler
              </Text>
            </Fill>
            <Fill>
              <Link href="https://github.com/rodrigooler" target="_blank">
                <Text textColor="accent" style={{ textAlign: 'center' }}>
                  {/* <Image src={images.github} style={{ height: 25, margin: '0 0 10 0' }} /> */}
                  rodrigooler
                </Text>
              </Link>
            </Fill>
            <Fill>
              <Link href="https://twitter.com/rodrigooler" target="_blank">
                <Text textColor="accent" style={{ textAlign: 'right' }}>
                  {/* <Image src={images.twitter} style={{ height: 25, margin: '0 0 10 0' }} /> */}
                  @rodrigooler
                </Text>
              </Link>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} margin="0 auto 100px" caps fit textColor="accent" textFont="primary">
            Who am i?
          </Heading>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - Software Engineer @entria
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - Contributor @reactconfbrazil
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} margin="0 auto 100px" caps fit textColor="accent" textFont="primary">
            React VR Overview
          </Heading>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - React is an open-source;
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - JavaScript library from Facebook;
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - Makes it easy to create interactive User Interfaces
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - React VR takes it to the next level VR
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - Create UIs and 3D scenes in virtual reality.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} margin="0 auto 100px" caps fit textColor="accent" textFont="primary">
            Benefits and concepts of React VR.
          </Heading>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - JSX and Declarative UIs
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - JavaScript library from Facebook;
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - Makes it easy to create interactive User Interfaces
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - React VR takes it to the next level VR
            </Text>
          </Appear>
          <Appear>
            <Text textColor="white" margin="0 auto 25px">
              - Create UIs and 3D scenes in virtual reality.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} margin="0 auto 100px" caps fit textColor="accent" textFont="primary">
            JSX and Declarative UIs
          </Heading>
        </Slide>
          <Slide transition={['fade']} bgColor="primary">
            <Heading size={2} margin="0 auto 100px" caps fit textColor="accent" textFont="primary">
              Key React Concepts
            </Heading>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                - Components;
              </Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                - Props;
              </Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                - State;
              </Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                - Events;
              </Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                - Layout;
              </Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                - Style;
              </Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                - ...;
              </Text>
            </Appear>
          </Slide>
          <Slide transition={['fade']} bgColor="primary">
            <Heading size={2} margin="0 auto 100px" caps fit textColor="accent" textFont="primary">
              React Ecosystem
            </Heading>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                React - the original library, which is used to target the web by creating DOM rendered by the browser.
              </Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                React Native - targets developing native applications on iOS and Android through the use of native components. React Native builds on top of core parts of React.
              </Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="0 auto 25px">
                React VR - the new library that we are talking about here, which enables developing UIs in VR. React VR builds on top of React Native frameworks.
              </Text>
            </Appear>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require('raw-loader!../examples/jsx-code-example')}
            ranges={[
              { loc: [0, 3], title: 'JSX and Declarative UIs' },
              { loc: [4, 10], title: 'Code compiled' },
            ]}
          />
      </Deck>
    );
  }
}
