import React from 'react';
// import themeSong from './media/themeSong.mp3';
import './Dancing.scss';

/* 
Ripped shamelessly from: https://codepen.io/Wujek_Greg/pen/EpJwaj

// Pure CSS dance animation (no graphics included)

// Designed by Gustavo Viselner
// https://dribbble.com/shots/3979515-It-s-not-unusual

// Thanks for Una Kravets for Sass Pixel Art technique
// https://una.im/sass-pixel-art/

// Making time ~ 7 hours

// Some Js for audio toggle
*/

export default class Dancing extends React.Component {
  // constructor() {
  // super();
  // this.music = new Audio(themeSong);
  // }
  componentDidMount() {
    this.music = document.getElementById('music');
    // var music = this.musicElem;
    var isPlaying = !this.music.paused;
    console.log({ isPlaying });
    // musica.volume = 0.2;

    const dance = document.querySelector('.dance-animation');

    this.togglePlay = () => {
      if (isPlaying) {
        // if (isPlaying || dance.style.animationPlayState === 'running') {
        console.log('pausing...', document.getElementById('music'));
        this.music.pause();
        // document.getElementById('music').play();
        // document.querySelector('audio').pause();
        isPlaying = false;
        dance.style.animationPlayState = 'paused';
      } else {
        console.log('playing...');
        this.music.play();
        // document.getElementById('music').play();
        isPlaying = true;
        dance.style.animationPlayState = 'running';
      }
    };

    const musicAnim = document.getElementById('music-animation');
    this.music.onplaying = function() {
      musicAnim.classList.add('on');
      // isPlaying = true;
    };
    this.music.onpause = function() {
      musicAnim.classList.remove('on');
      // isPlaying = false;
    };

    var button = document.getElementById('toggle');
    // button.addEventListener('click', () => this.togglePlay());

    const self = this;
    const handler = function() {
      if (button.getAttribute('data-text-swap') === button.innerHTML) {
        button.innerHTML = button.getAttribute('data-text-original');
      } else {
        button.setAttribute('data-text-original', button.innerHTML);
        button.innerHTML = button.getAttribute('data-text-swap');
      }
      self.togglePlay();
      // self.music.pause();
      document.querySelector('#message').click();
    };
    button.addEventListener('click', handler, false);

    var screen = document.querySelector('.screen');
    screen.addEventListener('click', handler, false);

    // window.startup = () => {
    const startup = () => {
      button.click();

      dance.animate([{ opacity: 0 }, { opacity: 1 }], 500);
      dance.style.animationPlayState = 'paused';
      setTimeout(() => {
        dance.style.animationPlayState = 'running';
      }, 500);
    };
    // this.music.pause();
    // isPlaying = false;
    // this.togglePlay();
    // startup();
    dance.style.animationPlayState = 'running';
    button.setAttribute('data-text-original', button.innerHTML);
    button.innerHTML = button.getAttribute('data-text-swap');
    document.querySelector('#message').click();
    // this.music.play();
    // isPlaying = true;
  }

  render() {
    return (
      <>
        <div className='screen'>
          <ul className='dance-animation'>
            <li className='dance-frame dance-animation--dancer1' />
            <li className='dance-frame dance-animation--dancer2' />
            <li className='dance-frame dance-animation--dancer3' />
            <li className='dance-frame dance-animation--dancer4' />
            <li className='dance-frame dance-animation--dancer5' />
            <li className='dance-frame dance-animation--dancer6' />
            <li className='dance-frame dance-animation--dancer7' />
            <li className='dance-frame dance-animation--dancer8' />
            <li className='dance-frame dance-animation--dancer9' />
            <li className='dance-frame dance-animation--dancer10' />
            <li className='dance-frame dance-animation--dancer11' />
          </ul>
        </div>

        <div className='play-music'>
          <div id='music-animation' className='music-animation'>
            <span className='bar bar1' />
            <span className='bar bar2' />
            <span className='bar bar3' />
            <span className='bar bar4' />
            <span className='bar bar5' />
          </div>
          <div className='music-toggle'>
            <a
              // onClick={() => this.togglePlay()}
              id='toggle'
              data-text-swap='Now Playing: Hot Air Balloon'
            >
              Music Paused
            </a>
          </div>
        </div>
        {/* ref={elem => (this.musicElem = elem)} */}
      </>
    );
  }
}
