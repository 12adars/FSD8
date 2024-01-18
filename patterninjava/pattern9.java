package patterninjava;

import java.util.Scanner;

public class pattern9 
{
    public static void main(String[] args) 
    {
          Scanner Sc = new Scanner(System.in); 
     System.err.println("Enter the row in integer");
        int row= Sc.nextInt();
    
    for(int i=1;i<=5;i++)
        {
          for(int j=1;j<=(row-1);j++)
          {
           System.out.print("");
          }
          for(int k=1;k<=(2*i-1);k++)
          {
           System.out.print("*");
          }
          
          for(int l=1;l<=(row+1-i);l++)
          {
            System.out.print("*");
          }

          System.out.println();
  }   }
}
