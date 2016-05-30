abstract class AbstractClass {
    public abstract primitiveOperation1();
    public abstract primitiveOperation2();

    public templateMethod() {
        this.primitiveOperation1();
        this.primitiveOperation2();
        console.log('finish')
    }
}

class ConcreteClassA extends AbstractClass {
    public primitiveOperation1() {
        console.log('具体类A方法1实现')
    }

    public primitiveOperation2() {
        console.log('具体类A方法2实现')
    }
}

class ConcreteClassB extends AbstractClass {
    public primitiveOperation1() {
        console.log('具体类B方法1实现')
    }

    public primitiveOperation2() {
        console.log('具体类B方法2实现')
    }
}


var c = new ConcreteClassA();
c.templateMethod();
c = new ConcreteClassB();
c.templateMethod();