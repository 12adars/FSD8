package patterninjava;
import java.util.Scanner;

public class pattern3 
{
    public static void main(String[] args) 
    {

    Scanner Ab=new Scanner(System.in);
    System.out.println("Enter the value in integer");
    int n=Ab.nextInt();
        // for(int i=1;i<=5;i++)
        // {
        //     for(int j=1;j<=(6-i);j++)
        //     {
        //        System.out.print(" "); 
        //     }
        //      for(int k=1;k<=(6-i+1);k++)
        //     {
        //        System.out.print("*"); 
        //     }

        // }
        // System.out.println();  
         for(int i =1;i<=5;i++)
        {
            for(int j=1;j<=(6-i);j++)
            {
               System.out.print(" "); 
            }
             for(int k=1;k<=(2*i-1);k++)
            {
               System.out.print("*"); 
            }
             System.out.println();  
        }
        
    }
}
