package patterninjava;
import java.util.Scanner;
public class pattern15 
{
    public static void main(String[] args) 
    {
        Scanner Sc = new Scanner(System.in); 
        System.err.println("Enter the row in integer:");
           int row= Sc.nextInt();
        
           for(int i=1;i<=row;i++)
           {
            int num=row;
             for(int j=1;j<=i;j++)
             {
                System.out.print(num);
                num--;
             }
             System.out.println();
           }
    }
}
