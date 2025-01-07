import { Clock, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import { FormContact } from "./form-contact";

const Location: React.FC = () => {
	return (
		<div className="w-full h-full my-10">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-[95%] md:w-4/6">
          <div className="flex items-center justify-center mb-8">
            <MapPin className="w-8 h-8 mr-4 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Encuéntranos</h2>
          </div>
          <div className="p-8 space-y-6 bg-white border-t-4 rounded shadow-lg border-primary">
            <div className="flex items-center justify-center space-x-12">
              <div className="relative w-48 h-16">
                <Image
                  alt={`Logo`}
                  src={'/logos/indugal-logo.png'}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-48 h-16">
                <Image
                  alt={`Logo`}
                  src={'/logos/logo-galvanizados.png'}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-center text-gray-500">Expertos en galvanizado industrial. Tu solución en protección contra la corrosión.</p>
            <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row md:space-y-0">
              <div className="flex-1 p-6 space-y-4 border border-gray-200 rounded bg-gray-50">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-primary">Información de Contacto</h3>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start space-x-2 text-start">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div className="flex flex-col">
                      <h3 className="font-semibold font-bold text-md text-primary">Planta Industrial</h3>
                      <p className="font-medium text-gray-500">Cl. 36 #52-50, La Candelaria, Medellín, Antioquia</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start space-x-2 text-start">
                    <Phone className="w-6 h-6 text-primary" />
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-md text-primary">Teléfono Planta</h3>
                      <p className="font-medium text-gray-500">+57 (604) 123-4567</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start space-x-2 text-start">
                    <Mail className="w-6 h-6 text-primary" />
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-md text-primary">Correo Electrónico</h3>
                      <p className="font-medium text-gray-500">contacto@galvanizados.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start space-x-2 text-start">
                    <Clock className="w-6 h-6 text-primary" />
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-md text-primary">Horario de Operación</h3>
                      <p className="font-medium text-gray-500">Lunes a Viernes: 7:00 AM - 5:00 PM</p>
                      <p className="font-medium text-gray-500">Sábado: 7:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d-75.5672!3d6.2442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f!2sCl.+36+%2352-50%2C+La+Candelaria%2C+Medell%C3%ADn%2C+Antioquia!5e0!3m2!1ses!2sco!4v1"
                  width="100%" 
                  height="250" 
                  className="border-0 rounded"
                  loading="lazy">
                </iframe>
              </div>
              <div className="flex-1 p-6 border border-gray-200 rounded bg-gray-50">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-primary">Solicitud de Servicio</h3>
                </div>
                <FormContact/>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
};

export default Location;