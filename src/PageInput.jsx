import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import './pageInput.css'; 

const { Dragger } = Upload;

const PageInput = () => {
  const navigate = useNavigate();

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
				
				setTimeout(() => {
					navigate('/resultado', { state: { datos: resultado, exito: true } });
				}, 500);
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
			<Dragger className='contenedor-dragger' {...props}>
				<p className="ant-upload-drag-icon">
					<InboxOutlined />
				</p>
				<p className="ant-upload-text">Hacé clic o arrastrá un archivo PDF aquí para subirlo</p>
				<p className="ant-upload-hint">
					Solo se admite un archivo PDF. No subas archivos sensibles o no permitidos.
				</p>
			</Dragger>
		</div>
  );
};

export default PageInput;
