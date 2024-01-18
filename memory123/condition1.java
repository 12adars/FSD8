

public class condition1 
{
    int h=89;// instance variable or inside the heap  or out side from main function
     int adarsh()
     {
        return 90;
     }
    public static void main(String[] args) 
    {
        int f = 89; // local variable because it is inside the stack
        condition1 x= new condition1(); 
        condition1 y= new condition1();
        Object A;
        condition1.A.B g =A.new  ();
        System.out.println("x.h");
        System.out.println("g.b");
        x.adarsh();

        
    }
    class A
    {
        class B
        {
           int b = 8;
        }

    }
}
