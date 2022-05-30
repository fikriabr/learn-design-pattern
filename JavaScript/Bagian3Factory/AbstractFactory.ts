interface Button {
    paint(): string
}

class BaseButton implements Button {
    paint(): string {
        throw new Error("Method not implemented.");
    }
}

class WinAppButton extends BaseButton {
    paint(): string {
        return 'Windows application button here'
    }
}

class MacAppButton extends BaseButton {
    paint(): string {
        return 'Mac application button here'
    }
}

interface Checkbox {
    paint(): string;
}

class BaseCheckbox implements Checkbox {
    paint(): string {
        throw new Error("Method not implemented.");
    }
}

class WinAppCheckbox extends BaseCheckbox {
    paint(): string {
        return 'Checkbox Windows Paint';
    }
}

class MacAppCheckbox extends BaseCheckbox {
    paint(): string {
        return 'Checkbox Mac Paint';
    }
}

interface UIFactory {
    createButton(): Button
    createCheckbox(): Checkbox
}

class BaseUIFactory implements UIFactory {
    createButton(): Button {
        throw new Error("Method not implemented.");
    }
    createCheckbox(): Checkbox {
        throw new Error("Method not implemented.");
    }
}

class WindowsAppFactory extends BaseUIFactory {
    createCheckbox(): Checkbox {
        return new WinAppCheckbox()
    }
    createButton(): Button {
        return new WinAppButton()
    }
}

class MacAppFactory extends BaseUIFactory {
    createCheckbox(): Checkbox {
        return new MacAppCheckbox()
    }
    createButton(): Button {
        return new MacAppButton()
    }
}


class Application {
    private factory: UIFactory = new BaseUIFactory();
    private button: Button = new BaseButton();
    private checkbox: Checkbox = new BaseCheckbox();

    constructor(factory: UIFactory) {
        this.factory = factory;
    }
    createUI() {
        this.button = this.factory.createButton()
        this.checkbox = this.factory.createCheckbox()
        console.log('Creating Application UI');

    }
    paint() {
        const buttonPaint: string = this.button.paint()
        const checkboxPaint: string = this.checkbox.paint()

        console.log(`buttonPaint : ${buttonPaint}`)
        console.log(`checkboxPaint : ${checkboxPaint}`)
    }
}

class ApplicationConfigurator {
    private factory: UIFactory = new BaseUIFactory();
    main(config: { OS: string }) {
        switch (config.OS) {
            case 'Windows':
                this.factory = new WindowsAppFactory()
                break;
            case 'Mac OS':
                this.factory = new MacAppFactory()
                break;
            default:
                throw new Error(`Unsupported on ${config.OS} OS`)
        }
        const app: Application = new Application(this.factory);
        app.createUI();
        app.paint();
    }

}

console.log("Windows");
const config1 = { OS: 'Windows' }
new ApplicationConfigurator().main(config1)

console.log("Mac OS");
const config2 = { OS: 'Mac OS' }
new ApplicationConfigurator().main(config2)