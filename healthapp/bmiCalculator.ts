function calculateBMI(height: number, weight: number) {
    const imc = weight / ((height / 100) ** 2)
    return imc < 18.5 ? "Underweight" : imc < 25 ? "Normal range" : imc < 30 ? "Overweight" : "Obese";
}

console.log(calculateBMI(180, 74))