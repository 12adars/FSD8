package patterninjava;

import java.util.Scanner;

public class pattern2 
{
    

    public static void main(String[] args) 
    {
         Scanner Sc = new Scanner(System.in); 
     System.err.println("Enter the row in integer");
        int row= Sc.nextInt();
        
        // for(int i=1;i<=5;i++)
        // {
        //     for(int j=1;j<=i;j++)
        //     {
        //     // System.out.print("*"); 
        //     System.out.print(j);
        //     }
        //     System.out.println();
        // }
        
        // for(int i=1;i<=row;i++)
        //{
            

        //     for(int j=1;j<=i;j++)
        //     {
        //     System.out.print( ""); 
        //     // System.out.print(j);
        //      }
        //      for(int k=1;k<=(2*i-1);k++)
        //      {
        //         System.out.print(k);
        //      }
        //      System.out.println();

        //}
         for(int i=1;i<=row;i++)
        {
            

            for(int j=1;j<=i;j++)
            {
            System.out.print( ""); 
            // System.out.print(j);
             }
             for(int k=1;k<=(row-i+1);k++)
             {
                System.out.print("*");
             }
             
            for(int j=1;j<=i;j++)
            {
            System.out.print( ""); 
            // System.out.print(j);
             }
             for(int k=1;k<=2*(row-i)+1;k++)
             {
                System.out.print("*");
             }
        }     System.out.println();

    }
}
