import React, { useState } from 'react';

function FileUploadComponent() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Проверяем, что выбран файл
    if (selectedFile) {
      // Читаем файл с помощью FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // reader.result будет содержать данные в формате Data URL
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null); // Сбрасываем превью, если файл не выбран
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {/* Превью файла (например, изображение) */}
      {preview && (
        <img src={preview} alt="Preview" style={{ maxWidth: '200px' }} />
      )}
      {/* Данные файла (для демонстрации, можно вынести в отдельную область для отображения) */}
      {file && (
        <pre>
          <pre>Файл:</pre>
          {file.name}
        </pre>
      )}
    </div>
  );
}

export default FileUploadComponent;