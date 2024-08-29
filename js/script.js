document.getElementById('igssPensionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Aquí se captura los valores del formulario
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const yearsWorked = parseInt(document.getElementById('yearsWorked').value);
    const totalQuotas = parseInt(document.getElementById('totalQuotas').value);
    const last5YearAverageSalary = parseFloat(document.getElementById('last5YearAverageSalary').value);

    // Aquí las validaciones
    if (age < 60) {
        alert("Debe tener al menos 60 años para jubilarse.");
        return;
    }

    if (totalQuotas < 240) {
        alert("Debe haber pagado al menos 240 cuotas al IGSS para jubilarse.");
        return;
    }

    // Cálculo de la pensión: el IGSS utiliza un porcentaje del promedio de salarios de los últimos 5 años
    const basePension = last5YearAverageSalary * 0.5; // 50% del promedio de salario
    const additionalPension = ((totalQuotas - 240) / 60) * (last5YearAverageSalary * 0.01); // 1% adicional por cada 5 años extra

    const finalPension = basePension + additionalPension;

    // Aquí mostramos el resultado en una nueva ventana/tab
    const resultPage = `
        <html>
        <head>
            <title>Resultado de Jubilación por el IGSS</title>
            <style>
                body {
                    font-family: 'poppins';
                    background-color: black;
                    margin: 0;
                    padding: 20px;
                    background-image: url('./img/img8.jpg');
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
                }
                .container {
                    background-color: #fff;
                    padding: 20px;
                    background: rgba( 0, 128, 255, 0.25 );
                    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                    backdrop-filter: blur( 5.5px );
                    -webkit-backdrop-filter: blur( 5.5px );
                    border-radius: 10px;
                    max-width: 600px;
                    margin: 50px auto;
                    font-size: 15px;
                }
                h1 {
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Estimación de Jubilación por el IGSS</h1>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Edad:</strong> ${age} años</p>
                <p><strong>Años trabajados:</strong> ${yearsWorked} años</p>
                <p><strong>Cuotas pagadas:</strong> ${totalQuotas} cuotas</p>
                <p><strong>Promedio de sueldos últimos 5 años:</strong> Q${last5YearAverageSalary.toFixed(2)}</p>
                <p><strong>Pensión estimada:</strong> Q${finalPension.toFixed(2)} por mes</p>
                <p>Esta es una estimación basada en las leyes actuales. Consulte con el IGSS para información específica.</p>
            </div>
        </body>
        </html>
    `;

    const resultWindow = window.open('', '_blank');
    resultWindow.document.write(resultPage);
    resultWindow.document.close();
});
