/**
 * Home page of the application
 */
 export class IndexPage extends HTMLElement {
    constructor() {
        super();
    } 

    /**
     * Insert the page template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="m-12">
            <h1 class="text-green-500 font-semibold text-4x1">
                Les Petits Plats
            </h1>
            <p>place for algorithms</p>
            <search-bar></search-bar>
            <section class="flex gap-8">
            <appliance-select></appliance-select>
            <ustensil-select></ustensil-select>
            </section>
            <search-result></search-result>
            </div>
      `;
        this.appendChild(template.content);
    }
}


 