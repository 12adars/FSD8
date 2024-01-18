package memory89;

public class adarsh 
{
    public static void main(String []args)
    {
       file.vbn();
    } 


      class file
    {
        static int vbn()
        {
            System.out.println("this is vbn method");
            for(int i=0; i<4; i++)
            vbn();
            System.out.println("hello");
            return 90;


        }
    }

    


    
}
