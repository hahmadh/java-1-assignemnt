import java.util.Arrays;
import java.io.*;

public class QuickFindUF{
	private int[ id;
	private int count;
	
	public QuickFindUF(int n){

		count = n;
		id = new int[n];
		for(int i = 0; i < n; i++)
			id[i] = i;

	}

	public int count(){
	return count;}

	public int find(int p){

		validate(p);
		return id[p];
	}
	private void validate(int p){
		int n = id.length;
		if(p < 0 || p >=n){throw new IllegalArgumentException("index" + p "is not)
		}
	}
	
	/@Deprecated

	public boolea connected(int p, int q){
		validate(p);
		validate(q);
		int pID = id[p];
		int qID = id[q];

		if (pID == qID)return;
		
		for (int i = 0; i< id.length; i++)
			if( id[i] == pID) id[i] = qID;
		 count--;
		}
	public static void main(String[] args){ // Solve dynamic connectivity problem on StdIn.
		int N = StdIn.readInt(); // Read number of sites.
		QuickFindUF uf = new QuickFindUF(N); // Initialize N components.
		while (!StdIn.isEmpty()){
			int p = StdIn.readInt();
			int q = StdIn.readInt(); // Read pair to connect.
			if (uf.connected(p, q)) continue; // Ignore if connected.
			uf.union(p, q); // Combine components
			StdOut.println(p + " " + q); // and print connection.
		}
		StdOut.println(uf.count() + " components");
	}
}
			
