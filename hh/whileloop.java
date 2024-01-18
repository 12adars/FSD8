package hh;

import java.util.Scanner;

public class whileloop 
{
    

    public static void main(String[] args) 
    {
        try (Scanner sc = new Scanner(System.in)) {
            int n= sc.nextInt();

            int sum=0;

            int num =1;
            while(num<=n)
            {
            //    System.out.println(num);
            sum=sum+num;
               num++; // postfix increment operator
            
            }
            System.out.println(sum);
        }
    }
}
