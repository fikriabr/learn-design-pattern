class CodeBuilder {
    constructor(className) {
        this.className = className;
        this.fields = [];
    }

    addField(name) {
        this.fields.push(name)
        return this;
    }

    toString() {
        const code = [];
        code.push(`class ${this.className} {`);
        const i1 = ' '.repeat(2);
        const i2 = ' '.repeat(4);
        if (this.fields.length) {
            code.push(`${i1}constructor(${this.fields.join(', ')}) {`);
            for (let field of this.fields) {
                code.push(`${i2}this.${field} = ${field};`);
            }
            code.push(`${i1}}`);
        }
        code.push('}');
        return code.join('\n');
    }
}

const cb = new CodeBuilder('House');
cb.addField('Door').addField('Window');
console.log(cb.toString());
/** Output
 * ----------------------------------------------------------------
 * class House {
 *   constructor(Door, Window) {
 *     this.Door = Door;
 *     this.Window = Window;
 *   }
 * }
 * ----------------------------------------------------------------
 */