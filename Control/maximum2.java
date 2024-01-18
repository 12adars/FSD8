package Control;

public class maximum2
    //wrrite a program to find maximum between three no.

{
    public static void main(String[] args) 
    {
        
    
    
    int a=45;
    int b=90;
    int c=67;
    if(a>b&&b>c)
    {
        System.out.println(a);
        System.out.println(b);
    }
    else 
    {
        System.out.println(c);

    }
    if(c>a&&c>b)
    {
        System.out.println(c);
        System.out.println(b);
    }
    else 
    {
        System.out.println(a);
        System.out.println(b);
    }
  }
}
