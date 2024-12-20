package pts.PruebaTecnica.series;

public class SeriesNumericas {

    //Obtener el valor de n para sustitucion en la formula
    public static int numeroPrimo(int n){
        var contador = 0;
        var numero = 1;

        while(contador < n){
            numero++;

            if(calcularNumeroPrimo(numero)){
                contador++;
            }
        }

        return numero;

    }

    //Determinar si "n" es un numero primo
    public static boolean calcularNumeroPrimo(int n){
        if(n < 2) return false;

        for(var i = 2; i < n; i++){
            if(n % i == 0){
                return false;
            }
        }

        return true;

    }

    //Calcular el triangular de "n"
    public static int calcularTriangular(int n){
        return n * (n + 1) / 2;
    }

    //Calculo del fibonacci de "n"
    public static int calcularFibonacci(int n){

        if(n <= 1) return n;

        int a = 0, b = 1, fibonacci = 0;

        for(var i = 2; i <= n; i++){
            fibonacci = a + b;
            a = b;
            b = fibonacci;
        }

        return fibonacci;
    }

    public double calcularSerie(int n){

        if (n <= 0) {
            throw new IllegalArgumentException("El valor de n debe ser mayor o igual a 1.");
        }

        var primo = 4 * numeroPrimo(n);
        var triangular = calcularTriangular(n - 1);
        var fibonacci = calcularFibonacci(n + 2);

        double resultado = (double) (primo - triangular) / fibonacci;

        return Double.parseDouble(String.format("%.3f", resultado));

    }

    public static void main(String[] args) {
        SeriesNumericas serie = new SeriesNumericas();
    }

}
