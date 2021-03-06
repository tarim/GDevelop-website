import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import Paragraph from '../components/Paragraph';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import MakeGameBanner from '../components/MakeGameBanner';
import TweetContainer from '../components/TweetContainer';

export default class EducationPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t('GDevelop for the education - Teach game creation')}
            >
              <html lang={this.props.pathContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator requiring no coding skills. It is perfect to teach game creation to students or children."
              />
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteBigTitle>{t('GDevelop for education')}</WhiteBigTitle>
              <WhiteParagraph>
                {t(
                  'Using GDevelop in classroom is a perfect opportunity to teach programming, game making and unleash students creativity.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <Paragraph>
                {t(
                  'GDevelop has already been used in classrooms and online courses, with digital media students or children in first grade!'
                )}
              </Paragraph>
              <TweetContainer>
                <blockquote className="twitter-tweet" data-lang="en">
                  <p lang="en" dir="ltr">
                    Great session thanks to{' '}
                    <a href="https://twitter.com/MDSNZ?ref_src=twsrc%5Etfw">
                      @MDSNZ
                    </a>{' '}
                    on{' '}
                    <a href="https://twitter.com/hashtag/gameart?src=hash&amp;ref_src=twsrc%5Etfw">
                      #gameart
                    </a>{' '}
                    and{' '}
                    <a href="https://twitter.com/hashtag/gamedevelopment?src=hash&amp;ref_src=twsrc%5Etfw">
                      #gamedevelopment
                    </a>{' '}
                    using{' '}
                    <a href="https://twitter.com/Krita_Painting?ref_src=twsrc%5Etfw">
                      @Krita_Painting
                    </a>{' '}
                    and{' '}
                    <a href="https://twitter.com/Game_Develop?ref_src=twsrc%5Etfw">
                      @Game_Develop
                    </a>{' '}
                    <a href="https://twitter.com/StCuthberts?ref_src=twsrc%5Etfw">
                      @StCuthberts
                    </a>{' '}
                    <a href="https://t.co/p4ESk0yqOj">
                      pic.twitter.com/p4ESk0yqOj
                    </a>
                  </p>&mdash; GirlsInnov8 (@GirlsInnov8){' '}
                  <a href="https://twitter.com/GirlsInnov8/status/885699194824015872?ref_src=twsrc%5Etfw">
                    July 14, 2017
                  </a>
                </blockquote>
              </TweetContainer>
              <TweetContainer>
                <blockquote className="twitter-tweet" data-lang="en">
                  <p lang="es" dir="ltr">
                    2 y 3JUN➡Colaboramos con el festival{' '}
                    <a href="https://twitter.com/gameboss?ref_src=twsrc%5Etfw">
                      @gameboss
                    </a>{' '}
                    con un taller familiar de desarrollo de videojuegos con{' '}
                    <a href="https://twitter.com/Game_Develop?ref_src=twsrc%5Etfw">
                      @Game_Develop
                    </a>{' '}
                    <a href="https://t.co/1PYKu4B8oB">
                      https://t.co/1PYKu4B8oB
                    </a>{' '}
                    <a href="https://t.co/9ohknoDS9P">
                      pic.twitter.com/9ohknoDS9P
                    </a>
                  </p>&mdash; ETOPIA_Kids (@etopia_kids){' '}
                  <a href="https://twitter.com/etopia_kids/status/862708642004561920?ref_src=twsrc%5Etfw">
                    May 11, 2017
                  </a>
                </blockquote>
              </TweetContainer>
              <TweetContainer>
                <blockquote className="twitter-tweet" data-lang="en">
                  <p lang="fr" dir="ltr">
                    <a href="https://twitter.com/Florianrival?ref_src=twsrc%5Etfw">
                      @Florianrival
                    </a>{' '}
                    Oh génial un cours de Gdevelop sur{' '}
                    <a href="https://t.co/eLZ3fVDNX0">
                      https://t.co/eLZ3fVDNX0
                    </a>{' '}
                    dans &quot;Se former pour l’ICN Informatique et Création
                    Numérique&quot;
                  </p>&mdash; Mickael HOARAU (@Oneil974){' '}
                  <a href="https://twitter.com/Oneil974/status/846972284225114114?ref_src=twsrc%5Etfw">
                    March 29, 2017
                  </a>
                </blockquote>
              </TweetContainer>
              <TweetContainer>
                <blockquote className="twitter-tweet" data-lang="en">
                  <p lang="en" dir="ltr">
                    The students of my{' '}
                    <a href="https://twitter.com/Game_Develop?ref_src=twsrc%5Etfw">
                      @Game_Develop
                    </a>{' '}
                    course are graduating today! This is a proud day for me 🙂<a href="https://twitter.com/hashtag/ChangeTheWayWeLearn?src=hash&amp;ref_src=twsrc%5Etfw">
                      #ChangeTheWayWeLearn
                    </a>{' '}
                    <a href="https://t.co/yO3pioAG5Z">
                      pic.twitter.com/yO3pioAG5Z
                    </a>
                  </p>&mdash; Lebo Miya (@lebzmiya){' '}
                  <a href="https://twitter.com/lebzmiya/status/799661913546358784?ref_src=twsrc%5Etfw">
                    November 18, 2016
                  </a>
                </blockquote>
              </TweetContainer>
              <TweetContainer>
                <blockquote className="twitter-tweet" data-lang="en">
                  <p lang="en" dir="ltr">
                    Ralph, 6, working on Super Paper Ralph DS using{' '}
                    <a href="https://twitter.com/GDevApp?ref_src=twsrc%5Etfw">
                      @GDevApp
                    </a>, and{' '}
                    <a href="https://twitter.com/piskelapp?ref_src=twsrc%5Etfw">
                      @piskelapp
                    </a>{' '}
                    for his sprite{' '}
                    <a href="https://t.co/ylPoVTTsua">
                      pic.twitter.com/ylPoVTTsua
                    </a>
                  </p>&mdash; Stev Koppelman 🌹 (@skoppelman){' '}
                  <a href="https://twitter.com/skoppelman/status/751577981802442753?ref_src=twsrc%5Etfw">
                    July 9, 2016
                  </a>
                </blockquote>
              </TweetContainer>
              <TweetContainer>
                <blockquote className="twitter-tweet" data-lang="en">
                  <p lang="es" dir="ltr">
                    Ha empezado @coloniaetopia y estamos enseñando{' '}
                    <a href="https://twitter.com/scratch?ref_src=twsrc%5Etfw">
                      @scratch
                    </a>{' '}
                    y{' '}
                    <a href="https://twitter.com/Game_Develop?ref_src=twsrc%5Etfw">
                      @Game_Develop
                    </a>{' '}
                    !Os iremos informando de todo!{' '}
                    <a href="https://t.co/3SQV2AThLS">
                      pic.twitter.com/3SQV2AThLS
                    </a>
                  </p>&mdash; Crom Developer (@CromDeveloper){' '}
                  <a href="https://twitter.com/CromDeveloper/status/747435659451838464?ref_src=twsrc%5Etfw">
                    June 27, 2016
                  </a>
                </blockquote>
              </TweetContainer>
              <TweetContainer>
                <blockquote class="twitter-tweet" data-partner="tweetdeck">
                  <p lang="fr" dir="ltr">
                    Créer un jeu vidéo en{' '}
                    <a href="https://twitter.com/hashtag/Histoire?src=hash&amp;ref_src=twsrc%5Etfw">
                      #Histoire
                    </a>{' '}
                    au collège ou au lycée : quel outil utiliser ?<br />➡️{' '}
                    <a href="https://twitter.com/hashtag/GDevelop?src=hash&amp;ref_src=twsrc%5Etfw">
                      #GDevelop
                    </a>{' '}
                    : moteur de jeu{' '}
                    <a href="https://twitter.com/hashtag/LogicielLibre?src=hash&amp;ref_src=twsrc%5Etfw">
                      #LogicielLibre
                    </a>{' '}
                    et multiplateforme{' '}
                    <a href="https://t.co/dRwcV4hpFX">
                      https://t.co/dRwcV4hpFX
                    </a>{' '}
                    <a href="https://twitter.com/hashtag/Ludovia15?src=hash&amp;ref_src=twsrc%5Etfw">
                      #Ludovia15
                    </a>{' '}
                    <a href="https://t.co/5Ylj6FjjGl">
                      pic.twitter.com/5Ylj6FjjGl
                    </a>
                  </p>&mdash; Canopé Aude (@canope_11){' '}
                  <a href="https://twitter.com/canope_11/status/1032277504164331520?ref_src=twsrc%5Etfw">
                    August 22, 2018
                  </a>
                </blockquote>
              </TweetContainer>
              <Paragraph>
                {t(
                  "Please send us your photos and tweets if you're using GDevelop for a course!"
                )}
              </Paragraph>
            </TransparentContainer>
            <MakeGameBanner />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
