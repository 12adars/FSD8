package memory89;

public class sysot 
{
   


   

   public static void main(String[] args) 
    {
         for(int i=1; i<4; i++)
         {
            for( int j=1; j<4; j++)
            {
                if(i==j)
                {
                   continue;
            }   }
            System.out.println(i+" "+j);
         }
         System.out.println("out side the for loop");
    }
   //in some programming situation we want to take the control to the begining of the loop by pASSING THE  STATEMENT inside theloop,which have to be executed.
}// the keyword continue allows us to this when continue encounterd inside the loop control jjumps to the beggining of the loop for performing next iteration A Continue is usally associated with an if.
