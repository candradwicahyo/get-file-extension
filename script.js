window.onload = () => {
  
  const text = document.querySelector('.text');
  const button = document.querySelector('#file');
  button.addEventListener('change', function() {
    const file = this.files[0];
    // dapatkan ekstensi file yang diupload
    getExtension(file.name);
  });
  
  function getExtension(param) {
    // pecah menjadi beberapa bagian
    const part = param.split('.');
    // ekstensi file
    const extension = part[part.length - 1].trim();
    // set ekstensi file di element text
    text.textContent = extension.toLowerCase();
  }
  
}