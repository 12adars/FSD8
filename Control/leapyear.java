package Control;

public class leapyear 
{
    // write a program to check whether a year is leap year or not.
    public static void main(String[] args) 
    {
        
        
         int year = 2023;
     
         if (year%4==0 &&(year%100!=0 || year%400==0)) 
         {
             System.out.println(year + " is leap year");
         }
         else 
         {
             System.out.println(year + " is non leap year");
         }
        
    }
}
