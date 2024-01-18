package Control;

import java.util.Scanner;

public class control11 
{
    
    //write a program to input week number and print week day.
    public static void main(String[] args) 
    {
       try (Scanner input = new Scanner(System.in)) {
        System.out.println("Enter the week no(1-7):");
        int n= input. nextInt();
        if(n==1)
        {
            System.out.println("This is sunday");
           
        }
        else if(n==2)
            {
            System.out.println("This is monday");
            }
        else if(n==3)
            {
            System.out.println("This is Tuesday");
            }
        else if(n==4)
            {
            System.out.println("This is Wednesday");
            }
        else if(n==5)
            {
            System.out.println("This isThursday");
            }   
        else if(n==6)
            {
            System.out.println("This is Friday");
            }
        else if(n==7)
            {
            System.out.println("This is saturday");
            }
         else
            {
            System.out.println("please enter 1 to 7...");
            }
    }
       
       

    }
}

        
        