package memory89;

public class non_static
 {
    public static void main(String[] args) 
    {
        non_static h=new non_static();  // this type of method called constructer.
        new joy();
        //fgh;
        h.fgh();

    }
    int fgh()
    {
        System.out.println("this is the fgh");
        return 9;
    }

}
    class joy
    {
        joy()
        {

        }
        public static void main(String[] args)
        {
           new joy(); 
        }

    }
