import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import allGames, { platforms } from './backlog-games';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    outline: inherit;
    margin: 0;
  }
  
  html {
    box-sizing: border-box;
    outline: none;
  }

  body {
    margin: 0;
    padding: 0;
    background-image: url('/backlog/assets/yoshi.gif');
  }

  a {
    text-decoration: none;
  }

  p, a, h1 {
    font-family: sans-serif;
    color: white;
  }
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 700px;
  padding: 10px 10px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Header = styled.h1`
  display: inline-block;
  font-family: serif;
  transform: scale(calc(7.3 / 3), 1);
  transform-origin: top left;
  font-size: 81px;
  line-height: 67px;
  margin-bottom: 20px;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const HeaderMobile = styled(Header)`
  display: none;
  @media only screen and (max-width: 700px) {
    display: inline-block;
  }
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const TopText = styled.p`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 50px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
`;

const PlayGamesSection = styled.div`
  margin-bottom: 50px;
`;

const GameName = styled.p`
  margin-right: 20px;
`;

const GamePlatform = styled.p`
  opacity: 0.75;
  margin-right: 10px;
`;

const GameReplay = styled.p`
  opacity: 0.5;
  margin-right: 10px;
`;

const GameStarted = styled.p`
  opacity: 0.5;
  margin-right: 10px;
`;

const App = () => {
  const [playGames, setPlayGames] = useState([]);

  useEffect(() => {
    const idxs = [];
    let i = 0;
    while (i < 3) {
      const idx = Math.floor(Math.random() * allGames.length);
      if (idxs.indexOf(idx) === -1) {
        idxs.push(idx);
        i++;
      }
    }

    setPlayGames(idxs.map((i) => allGames[i]));
  }, []);
  return (
    <>
      <GlobalStyle />
      <Page>
        <Content>
          <Header>Backlog</Header>
          <HeaderMobile>
            Back
            <br />
            log
          </HeaderMobile>
          <Links>
            <Link href="https://rdelos747.github.io/rdls/">
              &lt; back to main site
            </Link>
          </Links>
          <TopText>
            This page keeps track of the games that I plan on playing but
            haven&#39;t gotten around to yet, as well as those that I have
            actually started but have dropped and plan to complete. I often
            spend more time deciding on a new game to play than actually
            playing, so this page aims to assist by suggesting a few games to
            consider.
            <br />
            <br />
            Thats all this does for now. I might add more features in the future
            ¯\_(ツ)_/¯
          </TopText>
          <PlayGamesSection>
            {playGames.map((game) => (
              <ListItem key={game.name}>
                <GameName>{game.name}</GameName>
                <GamePlatform>[{game.platform}]</GamePlatform>
                {game.replay && <GameReplay>(replay)</GameReplay>}
                {game.started && <GameStarted>(started)</GameStarted>}
              </ListItem>
            ))}
          </PlayGamesSection>
          <>
            {allGames.map((game) => (
              <ListItem key={game.name}>
                <GameName>{game.name}</GameName>
                <GamePlatform>[{game.platform}]</GamePlatform>
                {game.replay && <GameReplay>(replay)</GameReplay>}
                {game.started && <GameStarted>(started)</GameStarted>}
              </ListItem>
            ))}
          </>
        </Content>
      </Page>
    </>
  );
};

export default App;
