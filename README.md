# URL to QR Code Converter
This Node.js project allows you to convert a given URL into a QR code. It uses the 'inquirer' library for command-line input, 'qr-image' for QR code generation, and 'fs' for file system operations.

## Features:
Interactive Command Line Interface: Users can input the URL they want to convert via an interactive command line prompt using 'inquirer.'
QR Code Generation: The provided URL is converted into a QR code using the 'qr-image' library.
File Output: The generated QR code is saved as an image file ('qr-cd.png') and the input URL is saved in a text file ('link.txt').
## How to Use:
Clone the repository to your local machine.
Run npm install to install the required dependencies.
Execute the script using node index.js.
Follow the prompts to enter the URL you want to convert.
## Dependencies:
inquirer: For interactive command-line prompts.
qr-image: For generating QR codes.
fs: For file system operations.
Feel free to explore and modify the code according to your needs. Contributions and suggestions are welcome!
