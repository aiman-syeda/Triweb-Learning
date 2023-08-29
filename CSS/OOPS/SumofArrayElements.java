public class SumofArrayElements {
    public static void main(String[] args){
        int[] myarray = {23,5,3,6,7,65,34};
        int sum = 0;
        int i;

        //Use loop to iterate through the array elements
        for (i = 0; i < myarray.length; i++) {
            sum += myarray[i];
        }
        System.out.println("Sum is: " +sum);
    
    }
}