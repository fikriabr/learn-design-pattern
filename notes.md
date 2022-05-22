# Design Pattern

- Solid Principle
    - Single Responsibilty Principle 

        (_Separation of concern_): Satu _class_ biasanya memiliki fungsi spesifik, ketika terdapat dua fungsi dengan tujuan yang jauh berbeda, maka harus dibuat _class_ terpisah.

    - Open Closed Priciple
        
        Boleh (_open_) untuk melakukan extension, tapi tidak (_closed_) untuk melakukan modifikasi (_modification_) terhadap _class_ yang sudah ada.

    - Liskov Subtition Principle

        Suatu _class_ utama harus dapat diimplementasikan pada semua _class_ turunan. Ketika _class_ utama tidak dapat diimplentasikan pada kelas turunan, maka implementasi dari kelas utama menyalahi aturan Liskov Subtitution Principle. 

    - Interface Segregation Principle

        Suatu _class_ mestinya tidak dipaksakan untuk menerapkan _interface_ yang tidak digunakan sama sekali oleh _class_ tersebut.

    - Dependency Inversion Principle

        a. _High-level modules should not depend on low-level modules. Both should depend on abstractions._ 

        b. _Abstractions should not depend on details. Details should depend on abstractions._

- Creational
    - Builder
    - Factories
        - Abstract Factory
        - Factory Method
    - Prototype
    - Singleton
- Structural
    - Adapter
    - Bridge
    - Composite
    - Decorator
    - Facade
    - FlyWeight
    - Proxy
- Behavioural
    - Chain of Responsibilty
    - Command
    - Interpreter
    - Iterator
    - Mediator
    - Memento
    - Observer
    - State
    - Strategy
    - Template Method
    - Visitor
