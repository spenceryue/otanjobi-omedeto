import React from 'react';
// import * as Snap from 'snapsvg';
import { TimelineMax, Elastic } from 'gsap';
import './Message.css';

export default class Message extends React.Component {
  componentDidMount() {
    const Snap = window.Snap;
    const mina = window.mina;
    //VARIABLES
    var Stage = document.querySelector('#message');
    var s = Snap('#message-svg');
    var path = s.select('#textpath');

    ////GSAP
    var tl = new TimelineMax({ repeat: -1 });
    tl.pause();

    //UP
    tl.to(Stage, 0.65, {
      ease: Elastic.easeIn.config(1, 0.3),
      onStart: function() {
        up();
      },
    });

    //DOWN
    tl.to(Stage, 0.65, {
      ease: Elastic.easeOut.config(1, 0.3),
      onStart: function() {
        down();
      },
    });

    ////SNAP

    //UP
    function up() {
      path.animate(
        {
          d: 'M0.1,25.5c0,0,200.1-25,400-25c200.1,0,400,25,400,25',
        },
        4000,
        mina.elastic
      );
    }

    //DOWN
    function down() {
      path.animate(
        {
          d: 'M0.1,25c0,0,200.1,25,400,25c200.1,0,400-25,400-25',
        },
        4000,
        mina.elastic
      );
    }

    let playing = false;
    const text = Stage.querySelector('text');
    const toggle = () => {
      if (playing) {
        tl.pause();
        text.style.animationPlayState = 'paused';
        playing = false;
      } else {
        tl.play();
        text.style.animationPlayState = 'running';
        playing = true;
      }
    };
    this.toggle = toggle;

    Stage.addEventListener('click', () => {
      this.toggle();
    });

    Stage.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 750,
      // delay: 500,
      fill: 'forwards',
    });

    setTimeout(toggle, 1000);
  }
  render() {
    return (
      <>
        <div id='message'>
          <svg id='message-svg' viewBox='0 -200 800 200'>
            <text>
              <textPath href='#textpath' startOffset='49%' textAnchor='middle'>
                Happy Birthday Kate
              </textPath>
            </text>
            <path
              id='textpath'
              d='M0,25c0,0,200.1,0,400,0c200.1,0,400,0,400,0'
            />
          </svg>
        </div>
      </>
    );
  }
}
