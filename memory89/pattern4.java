package memory89;
public class pattern4 
{
    
    public static void main(String[] args) 
    {
        // int n = 7;
        // for(int r = 1 ; r<=n; r++)
        // {
        //     for(int c
        //      = 1; c<=n; c++)
        //     {
        //         if(r==1||r==n||r==c||r+c == n+1)
        //         {
        //             System.out.print("* ");
        //         }
        //         else
        //         {
        //             System.out.print("  ");
        //         }
        //     }


        //     System.err.println();

        // }

        int n=7;
        for(int r=1; r<=n; r++)
        {
           for( int c=1;c<=n; c++)
           {
             if(r== (n/2)+1|| c == (n/2) +1 || r==1&&c>n/2+1 || c== 1 && r<=n/2 || r == n && c<= n/2 || c ==n && r > n/2+1)
             {
               System.out.print("* ");
               

             }
             
             else
             {
                System.out.print("  ");
             }

           }
           System.err.println();
        }
    
        
    }
    
}
