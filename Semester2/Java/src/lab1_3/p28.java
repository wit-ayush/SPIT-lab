package lab1_3;
import java.util.*;

class book{
	String title;
	int year;
	void addbook(String title, int year){
		this.title=title;
		this.year=year;
	}
	void display() {
		System.out.println("\nTitle: "+title);
		System.out.println("Year: "+year);
	}
}

class author extends book{
	String author;
	void addauthor(String author, String title, int year){
		super.addbook(title,year);
		this.author=author;
	}
	void display(){
		super.display();
		System.out.println("Author: "+author);
	}
}

class Fantasy extends author{
	String genre;
	void addFantasy(String title, String Author, int year, String genre) {
		super.addauthor(Author,title,year);
		this.genre=genre;
	}
	void display() {
		super.display();
		System.out.println("Genre: "+genre);
	}
}
class Horror extends author{
	String genre;
	void addhorror(String title, String Author, int year, String genre) {
		super.addauthor(Author,title,year);
		this.genre=genre;
	}
	void display() {
		super.display();
		System.out.println("Genre: "+genre);
	}
}

public class p28 {
	public static void main(String a[]) {
		Scanner sc=new Scanner(System.in);
		Fantasy m=new Fantasy();
		Horror h=new Horror();
		
		m.addFantasy("One Piece", "Eiichiro Oda", 1999, "Adventure Fantasy");
		h.addhorror("Tokyo Ghoul", "Sui Ishida", 2014, "horror");
		
		m.display();
		h.display();
		sc.close();
	}
}
