//手机软件
abstract class HandsetSoft{
    public abstract run();
}

//手机游戏
class HandsetGame extends HandsetSoft{
    public run(){
        console.log('运行手机游戏')
    }
}

//手机通讯录
class HandsetAddressList extends HandsetSoft{
    public run(){
        console.log('运行手机通讯录')
    }
}


//手机品牌
abstract class HandsetBrand{
    protected soft:HandsetSoft;
    public setHandsetSoft(soft:HandsetSoft){
        this.soft = soft;
    }
    
    public abstract run()
}

//手机品牌 N
class HandsetBrandN extends HandsetBrand{
    public run(){
        this.soft.run();
    }
}

//手机品牌 M
class HandsetBrandM extends HandsetBrand{
    public run(){
        this.soft.run();
    }
}

var ab = new HandsetBrandN();
ab.setHandsetSoft(new HandsetGame());
ab.run();
ab.setHandsetSoft(new HandsetAddressList())
ab.run();

ab = new HandsetBrandM();
ab.setHandsetSoft(new HandsetGame());
ab.setHandsetSoft(new HandsetAddressList())
ab.run();

