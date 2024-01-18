package Control;


  public class control8
{
    // Write a program to input any alphabet and check whether it is vowel or consonant

    public static void main(String[] args) 
    {
       char x ='A';
       
       if ((x=='a' || x=='e' || x=='i' || x=='o' || x=='u') || 
           (x=='A' || x=='E' || x=='I' || x=='O' || x=='U')) 
       {
        System.out.println(x + " is a vowel");
       } 

       else 
       {
        System.out.println(x + " is a consonent");
       }
    }
}

