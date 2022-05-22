/**
 * Interface Segregation Principle
 * ----------------------------------------------------------------
 */

interface Printer {
    print(): void;
}

interface Scanner {
    scan(): void;
}

interface FaxMachine {
    fax(): void;
}

class PhotocopyMachine implements Printer, Scanner {
    print(): void {
        console.log("PhotocopyMachine Do Print");
    }
    scan(): void {
        console.log("PhotocopyMachine Do Scan");
    }
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
    print(): void {
        console.log("MultiFunctionPrinter Do Print");
    }
    fax(): void {
        console.log("MultiFunctionPrinter Do Fax");
    }
    scan(): void {
        console.log("MultiFunctionPrinter Do Scan");
    }
}

class OldFashionedPrinter implements Printer {
    print(): void {
        console.log("OldFashionedPrinter Do Print")
    }
}

const photoCopy = new PhotocopyMachine();
photoCopy.scan()
photoCopy.print()

const mFPrinter = new MultiFunctionPrinter();
mFPrinter.print()
mFPrinter.fax()
mFPrinter.scan()

const oldPrinter = new OldFashionedPrinter();
oldPrinter.print()
