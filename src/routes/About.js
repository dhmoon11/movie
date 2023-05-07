import { Component } from "../core/core"
import aboutStore from '../store/about'

export default class About extends Component {
  render() {
    const { photo, name, email, github, number } = aboutStore.state

    this.el.classList.add('container', 'about')
    this.el.innerHTML = /* html */ `
      <div style="background-image: url(${photo});" 
      class="photo"></div>
    <p class="name">${name}</p>
    <p class="email">${email}</p>
    <p class="github">${github}</p>
    <p class="number">${number}</p>
    `
  }
}