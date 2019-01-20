import React, { Component } from 'react';
import './App.css';
import Confetti from './Confetti';
import Dancing from './Dancing';
import MoreConfetti from './MoreConfetti';
import Message from './Message';

class App extends Component {
  started = false;
  // audio = document.querySelector('audio');
  startup = () => {
    document.querySelector('audio')!.play();
    this.started = true;
    this.setState({});
    if (this.el) this.el.removeEventListener('click', this.startup);
  };
  constructor(props: any) {
    super(props);
    document
      .querySelector('audio')!
      .play()
      .then(
        () => {
          console.log('lucky');
          this.started = true;
          this.setState({});
        },
        () => {
          console.log('well shucks', this.el);
          if (this.el) this.el.addEventListener('click', this.startup);
        }
      );
  }
  el: HTMLDivElement | null = null;
  render() {
    if (!this.started)
      return (
        <div
          ref={el => (this.el = el)}
          // onClick={this.startup}
          dangerouslySetInnerHTML={{
            __html: '<ion-icon name="play-circle"></ion-icon>',
          }}
        />
      );
    else
      return (
        <>
          <div>
            <MoreConfetti />
            <Confetti />
            <Dancing />
            <Message />
          </div>
        </>
      );
  }
}

export default App;
