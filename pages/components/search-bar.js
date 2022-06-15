/**
 * An imput used for the research
 */
 export class SearchBar extends HTMLElement {
    constructor() {
        super();
    } 

    /**
     * Insert a input template used by the research
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <input type="text" placeholder="Rechercher une recette, un ingrédient, un ustensile..."
            class="my-4 border border-gray-500 p-2 border-1 rounded-sm w-full">
            </input>
      `;
        this.appendChild(template.content);
    }
}