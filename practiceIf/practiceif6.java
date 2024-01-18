package practiceIf;

public class practiceif6 
{
    public static void main(String[] args) 
    {
        int s= 60;
        int t= 34;
        int o= 35;
        if(s>t)
        {
            System.out.println("i miss yoou");
        }
        if(t>o)
        {
            System.out.println("i love you");
        }
        else if(t>s)
        {
            System.out.println("emotion less");
            if(s>=t)
            {
                System.out.println("i am bad");
            }
            System.out.println("i am very very bad");
        }
        if(s>=o)
        {
            System.out.println("no i wanna hug you");
            if(s<o)
            {
                System.out.println("you are my cutie");
            }
        }
    }
    
}
