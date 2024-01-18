package Control;

public class control9 
// write a program to input a variable  whether is a character or not.
{
    public static void main(String[] args) 
    {
    //    char z ='a';
       char z ='&';
    //    char z ='9';
       if (z>='a' && z<='z' || z>='A' && z<='Z') 
       {
        System.out.println(z+ " is a alphabet");
       } 
       else if (z>='0' && z<='9' ) 
       {
        System.out.println(z+ " is a digit");
       }
       else
       {
        System.out.println(z+ " is a special character");
       }
    }
}
