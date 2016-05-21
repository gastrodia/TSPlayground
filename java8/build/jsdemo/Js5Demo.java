

import java.io.FileReader;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;


public class Js5Demo {
	public static void main(String[] args) {
        System.out.println("start");
		try {
			ScriptEngineManager scriptEngineManager = 
				      new ScriptEngineManager(); 
			ScriptEngine nashorn = 
			      scriptEngineManager.getEngineByName("nashorn"); 
			//nashorn.eval(new FileReader("./lib/jquery.js"));
             System.out.println("get engine done");
           
			nashorn.eval(new FileReader("./js/export_obj.js"));
			//String name = "Olli"; 
			// Object obj=nashorn.eval("test('" + name + "')");
			//System.out.println("test1:"+obj);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("error:"+e.getMessage());
		}
		
	}
}
