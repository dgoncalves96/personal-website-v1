import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { loaderDelay, navDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import animationData from './../../images/lotties/yoga';
import Lottie from 'lottie-react';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .hero-row {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 50px;

    @media (max-width: 700px) {
      display: initial;
      margin-top: 15%;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Diogo Goncalves.</h2>;
  const three = <h3 className="big-heading">An organism that turns coffee into code.</h3>;
  const four = (
    <>
      <p>
        I'm a software engineer specializing in Frontend development. Currently, working at{' '}
        <a href="https://www.criticaltechworks.com/" target="_blank" rel="noreferrer">
          Critical Techworks
        </a>
        .
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          <div className="hero-row">
            <div className="hero-col">
              <Lottie height={400} width={400} animationData={animationData} />
            </div>
            <div className="hero-col">
              {isMounted &&
                items.map((item, i) => (
                  <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                  </CSSTransition>
                ))}
            </div>
          </div>
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
