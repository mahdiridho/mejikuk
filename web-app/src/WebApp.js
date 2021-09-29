import { LitElement, html, css } from 'lit';

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
        align-items: center;
      }
      img.cook {
        height: 99vh;
        margin-right: 30px;
      }
      img.social {
        width: 50px;
        margin-right: 10px;
      }
      @media (max-width: 460px) {
        :host {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img.cook {
          height: 60vh;
        }
        img.social {
          width: 40px;
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
      <img class="cook" src="/assets/undercook.png" alt="Mejikuk - Makan apa hari ini?">
      <div>
        <h1>Under Cooking ${this.dot}</h1>
      </div>
      <div>
        <a href="https://www.instagram.com/mejikuk/" target="_blank" rel="alternate"><img class="social" src="/assets/instagram.png" alt="ig:@mejikuk"></a>
        <a href="https://twitter.com/MejikukBuzz" target="_blank" rel="alternate"><img class="social" src="/assets/twitter.png" alt="twitter:@MejikukBuzz"></a>
        <a href="https://www.facebook.com/Mejikuk-106457581804015" target="_blank" rel="alternate"><img class="social" src="/assets/facebook.png" alt="twitter:@MejikukBuzz"></a>
      </div>
    `;
  }

  firstUpdated() {
    this.setDot()
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
