import java.util.Scanner;

public class AreaCalculator {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in); //To take input from the user
        
        float area_rec, area_cir;
        //Ask the shape
        System.out.println("press 1 to find area of rectangle: ");
        System.out.println("press 2 to find area of circle:");
        int option = scanner.nextInt();
        //Use if condition to go with user's choice
        if (option == 1) {
            //To find area of rectangle
        System.out.println("Enter length of rectangle:");
        int len = scanner.nextInt();
        System.out.println("Enter breadth of rectangle:");
        int bre = scanner.nextInt();
        area_rec = len * bre;
        System.out.println("Area of rectangle is " +area_rec);
        } else if (option == 2) {
            //To find area of a circle
        System.out.println("Enter radius of the circle:");
        float radius = scanner.nextFloat();
        area_cir = 22 / 7 * radius * radius;
        System.out.println("Area of circle is " +area_cir);
        } else {
            System.out.println("Invalid input!");
        }
        scanner.close();

    }
}