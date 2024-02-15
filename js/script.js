document.getElementById('convertBtn').addEventListener('click', function() {
    // Ambil nilai dari field input Celsius
    var celsius = parseFloat(document.getElementById('celsius').value);
    
    // Konversi suhu dari Celsius ke Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;
    
    // Tampilkan hasil konversi suhu Fahrenheit
    document.getElementById('fahrenheit').value = fahrenheit;

    // Tentukan cara kalkulasi
    var calculation = "Cara konversi dari Celsius ke Fahrenheit:\n";
    calculation += "s(℉) = (s(℃) × 9/5) + 32\n";
    calculation += "s(℉) = (" + celsius + " × 9/5) + 32\n";
    calculation += "s(℉) = " + fahrenheit;
    
    // Tampilkan cara kalkulasi
    document.getElementById('calculation').value = calculation;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    // Reset nilai field input
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
});

document.getElementById('reverseBtn').addEventListener('click', function() {
    // Ambil nilai dari field input Fahrenheit
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    
    // Konversi suhu dari Fahrenheit ke Celsius
    var celsius = (fahrenheit - 32) * 5/9;
    
    // Tampilkan hasil konversi suhu Celsius
    document.getElementById('celsius').value = celsius;

    // Tentukan cara kalkulasi
    var calculation = "Cara konversi dari Fahrenheit ke Celsius:\n";
    calculation += "s(℃) = (s(℉) - 32) × 5/9\n";
    calculation += "s(℃) = (" + fahrenheit + " - 32) × 5/9\n";
    calculation += "s(℃) = " + celsius;
    
    // Tampilkan cara kalkulasi
    document.getElementById('calculation').value = calculation;
});
