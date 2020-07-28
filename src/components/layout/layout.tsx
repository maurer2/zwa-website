import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Normalize } from 'styled-normalize';

import { ContextProvider } from '../../context/context';
import Theme from '../theme/theme';
import Masthead from '../masthead/masthead';
import Content from '../content/content';
import Footer from '../footer/footer';

import * as Styles from './layout.styles';
import * as Types from './layout.types';

const Layout: FC<PageProps & Types.LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  // const isHomePage = location.pathname === rootPath;

  return (
    <ContextProvider>
      <Theme>
        <Normalize />
        <Styles.Wrapper>
          <Masthead />
          <Content>
            {children}
          </Content>
          <Footer />
        </Styles.Wrapper>
      </Theme>
    </ContextProvider>
  );
};

export default Layout;
