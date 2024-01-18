package memory89;

public class non_static1
{
    int age;
    String name;
    String clgname;
    non_static1(int x,String r,String d)
    {
        age = x;
        name = r;
        clgname = d;

    }


    public static void main (String[] args)
    {
         new non_static1(12,"jittu","sistec");
         System.out.println("age");
         System.out.println("name");
         System.out.println("clgname");
    }

    
    
}