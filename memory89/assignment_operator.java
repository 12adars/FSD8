package memory89;

public class assignment_operator
{
    public static void main(String[] args) 
    {
        int m=89;
        int n=78;
        n +=m; //n=m+n
        System.out.println(n);
        m=n;
        System.out.println(n);
    }
}
