import { LitElement, html, css } from 'lit';

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
  let mql = window.matchMedia(mediaQuery);
  mql.addListener((e) => layoutChangedCallback(e.matches));
  layoutChangedCallback(mql.matches);
}

export class WebApp extends LitElement {
  static get properties() {
    return {
      dot: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        height: 100vh;
        display: flex;
        background: url('/assets/background.jpg');
        align-items: center;
      }
      div.brand {
        height: 100vh;
        width: 35%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: .8;
      }
      div.brand img {
        width: 50%;
      }
      div.content {
        flex-grow: 1;
        height: 100vh;
        background: grey;
        opacity: 0.8;
        color: white;
        display: flex;
        align-items: center;
        padding-left: 20px;
      }
      div.content div.wrapper {
        display: flex;
        flex-direction: column;
      }
      img.social {
        width: 50px;
        margin-right: 10px;
      }
      @media (max-width: 512px) {
        :host {
          height: 100vh;
          display: flex;
          background: white;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        div.brand {
          height: 100vh;
          justify-content: center;
          opacity: 1;
        }
        div.brand img {
          width: 150px;
        }
        div.content {
          background: #5aa02c;
          opacity: 1;
          width: 60%;
          color: white;
          display: flex;
          justify-content: center;
          border-radius: 15px 15px 0 0;
          padding: 0 40px;
        }
        div.wrapper h1 {
          font-size: 25px;
        }
        div.socialBox {
          display: flex;
          justify-content: center;
        }
        img.social {
          width: 30px;
          margin-right: 10px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.dot = "";
  }

  render() {
    return html`
      <div class="brand">
        <img src="/assets/logo.png" alt="Mejikuk - Makan apa hari ini?">
      </div>
      <div class="content">
        <div class="wrapper">
          <h1>Under Cooking ${this.dot}</h1>
          <div class="socialBox">
            <a href="https://www.instagram.com/mejikuk/" target="_blank" rel="alternate"><img class="social" src="/assets/instagram.png" alt="ig:@mejikuk"></a>
            <a href="https://twitter.com/MejikukBuzz" target="_blank" rel="alternate"><img class="social" src="/assets/twitter.png" alt="twitter:@MejikukBuzz"></a>
            <a href="https://www.facebook.com/Mejikuk-106457581804015" target="_blank" rel="alternate"><img class="social" src="/assets/facebook.png" alt="twitter:@MejikukBuzz"></a>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    installMediaQueryWatcher(`(max-width: 512px)`, desktop => desktop ? this.dot = "" : this.setDot() );
  }

  setDot() {
    setInterval(() => {
      if (this.dot == "...") {
        this.dot = "";
        return
      }
      this.dot += ".";
    }, 500)
  }
}
