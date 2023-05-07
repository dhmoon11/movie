import { Component } from '../core/core'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor(){
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { github, repository } = aboutStore.state
    this.el.innerHTML = /* html */ `
      <div>
        <a 
          href="#/"
          class="logo">
          <span>OMDBAPI</span>.COM
      </a>
      </div>
      <div>
          <a href="${repository}">
            ${new Date().getFullYear()}
              MoonDaeHyun
          </a>
      </div>
    `
  }
}