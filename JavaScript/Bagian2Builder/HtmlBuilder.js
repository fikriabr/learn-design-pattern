class Tag {
    static indentSize = 2;
    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = []
    }

    toHtmlString(indentLevel) {
        const html = []
        const indent = ' '.repeat(indentLevel * Tag.indentSize);
        html.push(`${indent}<${this.name}>\n`);
        if (this.text.length > 0) {
            const textIndent = ' '.repeat(Tag.indentSize) + indent;
            html.push(`${textIndent}${this.text}`);
            html.push(`\n`);
        }

        for (let child of this.children) {
            html.push(child.toHtmlString(indentLevel + 1))
        }
        html.push(`${indent}</${this.name}>\n`);
        return html.join('')
    }

    toString() {
        return this.toHtmlString(0)
    }
}

class HtmlBuilder {
    constructor(rootName = '', rootText = '') {
        this.root = new Tag(rootName, rootText);
        this.rootName = rootName;
    }

    addChild(childName, childText, element = null) {
        const child = new Tag(childName, childText);
        if (element) {
            child.children.push(element)
        }
        this.root.children.push(child)
        return this;
    }

    toString() {
        return this.root.toString()
    }

    build() {
        return this.root;
    }
}

const words = ['Contoh', 'Text']
const builder = new HtmlBuilder('div')
for (let word of words) {
    builder.addChild('span', word)
}

const innerBuilder = new HtmlBuilder('ul')
for (let word of words) {
    innerBuilder.addChild('li', word)
}
builder.addChild('div', '', innerBuilder.build())
console.log(builder.toString());

/** Output 
 * ----------------------------------------------------------------
 * <div>
 *   <span>
 *     Contoh
 *   </span>
 *   <span>
 *     Text
 *   </span>
 *   <div>
 *     <ul>
 *       <li>
 *         Contoh
 *       </li>
 *       <li>
 *         Text
 *       </li>
 *     </ul>
 *   </div>
 * </div>
 * ----------------------------------------------------------------
 */