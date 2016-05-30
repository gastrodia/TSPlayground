abstract class Subject{
    public abstract request();     
}

class RealSubject extends Subject{
    public request(){
        console.log('真实的请求')
    }
}

class Proxy extends Subject{
    private realSubject:RealSubject;
    public request(){
        if(this.realSubject == null){
            this.realSubject = new RealSubject();
        }
        this.realSubject.request();
    }
}


var proxy = new Proxy();
proxy.request();
