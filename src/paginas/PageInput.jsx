import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, notification, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../estilos/pageInput.css'; 

const { Dragger } = Upload;

const PageInput = () => {
  const navigate = useNavigate();
	const [data, setData] = useState(null);

  const props = {
    name: 'archivo',
    multiple: false,
    action: 'http://localhost:5000/subir-horario',
    accept: '.pdf',
    onChange(info) {
			const { status } = info.file;
			if (status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (status === 'done') {
				notification.success({
					message: 'Subida exitosa',
					description: `${info.file.name} se subió correctamente.`,
				});
				const resultado = info.file.response;
				console.log('Respuesta del servidor:', resultado);
				setData(resultado);
				
			} else if (status === 'error') {
				message.error(`${info.file.name} falló la subida.`);
			}
		},
    onDrop(e) {
      console.log('Archivos soltados', e.dataTransfer.files);
    },
  };

  return (
		<div className="contenedor-todo">
			<div className="contenedor-button">
				<Button className='button-enviar' disabled={!data || Object.keys(data).length === 0} onClick={() => navigate('/resultado', { state: { datos: data } })}> Ver Horario </Button>
			</div>
			<div className="contenedor-dragger">
				<Dragger className='contenedor-input' {...props}>
					<p className="ant-upload-drag-icon">
						<InboxOutlined />
					</p>
					<p className="ant-upload-text">Hacé clic o arrastrá un archivo PDF aquí para subirlo</p>
					<p className="ant-upload-hint">
						Solo se admite un archivo PDF. No subas archivos sensibles o no permitidos.
					</p>
				</Dragger>
			</div>
		</div>
  );
};

export default PageInput;
