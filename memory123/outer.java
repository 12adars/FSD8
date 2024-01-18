public class outer 
{
    int x;
    
    class outer1
{
    int y;
}
class outer3
{
    void zxc()

    {
        System.out.println("hii");
        
    }


    class ct
    {
        int k = 90;

    }
    public static void main(String[] args)
     {
        outer a = new outer();
        System.out.println(a.x);
        
        outer.outer1 i= new outer1();
        System.out.println(a.x);
        System.out.println(b.y);
        a.x = 43;
        b.y = 70;
        System.out.println(a.x);
        System.out.println(b.y);
        outer3 kk = new outer3();
        outer3 kk ct = new outer3();
        kk.zxc();
        
        
    }


}
}