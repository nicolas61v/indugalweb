// app/procesos-especiales/page.tsx
import {
	Beaker,
	Layers,
	Shapes,
	Pipette,
	TestTube,
	Sparkles,
	Shield,
	Hammer,
	Cog,
	Gauge,
} from 'lucide-react';
import Image from 'next/image';

export default function ProcesosEspecialesPage() {
	const procesosEspeciales = [
		{
			titulo: 'Zincado Negro brillante',
			descripcion:
				'Recubrimiento metálico de zinc mediante baño electrolítico para una excelente protección y acabado decorativo.',
			icon: <Beaker className="w-6 h-6" />,
		},
		{
			titulo: 'Zincado Verde brillante',
			descripcion:
				'Acabado verde oliva que proporciona protección superior y apariencia distintiva.',
			icon: <Pipette className="w-6 h-6" />,
		},
		{
			titulo: 'Latonado brillante y mate',
			descripcion:
				'Recubrimiento de latón que combina protección con acabados estéticos superiores.',
			icon: <TestTube className="w-6 h-6" />,
		},
		{
			titulo: 'Niquelado',
			descripcion:
				'Disponible en acabados brillante, mate y negro para máxima versatilidad.',
			icon: <Shield className="w-6 h-6" />,
		},
		{
			titulo: 'Cobrizado',
			descripcion:
				'Acabados brillante y mate para diversas aplicaciones industriales y decorativas.',
			icon: <Sparkles className="w-6 h-6" />,
		},
		{
			titulo: 'Estañado',
			descripcion:
				'Protección superior con opciones de acabado brillante y mate.',
			icon: <Layers className="w-6 h-6" />,
		},
	];

	return (
		<>
			{/* Hero Section con elementos industriales */}
			<section className="relative w-full overflow-hidden bg-primary">
				{/* Elementos decorativos industriales */}
				<div className="absolute inset-0 flex justify-between opacity-10">
					<Cog className="w-64 h-64 -mt-12 -ml-24 text-white animate-spin-slow" />
					<Gauge className="w-48 h-48 mt-24 -mr-12 text-white" />
				</div>

				<div className="container relative px-4 py-20 mx-auto md:px-8">
					<div className="flex flex-col items-center">
						<div className="relative mb-12 w-72 h-28">
							<div className="absolute inset-0 rounded-lg shadow-lg bg-white/95 backdrop-blur-sm" />
							<div className="relative flex items-center justify-center w-full h-full p-4">
								<Image
									src="/logos/galvagroup-logo.png"
									alt="GalvaGroup"
									fill
									className="object-contain"
								/>
							</div>
						</div>
						<div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-white/70 to-transparent mb-8" />
						<h1 className="mb-4 text-4xl font-light text-center text-white">
							Procesos y Recubrimientos Especiales
						</h1>
						<p className="max-w-3xl mx-auto text-xl text-center text-white/90">
							Soluciones avanzadas de recubrimiento para múltiples
							industrias
						</p>
					</div>
				</div>
			</section>
			<section className="relative w-full overflow-hidden">
				<div className="container px-4 mx-auto md:px-8 max-w-7xl">
					{/* Descripción General */}
					<section className="w-full mt-12 mb-24">
						<div className="p-8 bg-white shadow-2xl rounded-xl md:p-12">
							<div className="max-w-4xl mx-auto">
								<p className="mb-8 text-lg leading-relaxed text-gray-700">
									En Indugal – Industrias y Galvanizados
									S.A.S, además de Galvanizado en frío o
									zincado por electrodeposición de zinc,
									contamos con una amplia línea de procesos y
									recubrimientos especiales de metales no
									férricos por electrodeposición sobre piezas
									en metales varios.
								</p>

								{/* Industrias */}
								<div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-4">
									{[
										'Metalmecánica',
										'Autopartes',
										'Motopartes',
										'Ferretería',
										'Herrajes Eléctricos',
										'Marroquinería',
										'Confección',
										'Bisutería',
									].map((industria, index) => (
										<div
											key={index}
											className="p-4 text-center rounded-lg bg-gray-50"
										>
											<Hammer className="w-6 h-6 mx-auto mb-2 text-primary" />
											<span className="text-sm text-gray-700">
												{industria}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Grid de Procesos */}
							<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
								{procesosEspeciales.map((proceso, index) => (
									<div
										key={index}
										className="p-6 transition-all duration-300 bg-gray-50 rounded-xl hover:shadow-lg group"
									>
										<div className="flex items-center justify-center p-4 mb-4 transition-colors rounded-full bg-primary/10 w-14 h-14 group-hover:bg-primary/20">
											<div className="text-primary">
												{proceso.icon}
											</div>
										</div>
										<h3 className="mb-3 text-xl font-medium text-primary">
											{proceso.titulo}
										</h3>
										<p className="text-gray-600">
											{proceso.descripcion}
										</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Procesos Adicionales */}
					<section className="mb-24">
						<div className="p-8 text-white bg-gray-900 rounded-xl md:p-12">
							<h2 className="mb-8 text-3xl font-light">
								Procesos Especializados
							</h2>
							<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
								{[
									{
										titulo: 'Oro brillante',
										descripcion:
											'Recubrimiento metálico mínimo (flash) de oro que proporciona un color uniforme y acabado premium.',
										icon: <Sparkles />,
									},
									{
										titulo: 'Envejecidos',
										descripcion:
											'Recubrimientos metálicos multicapa con acabados especiales para lograr efectos de envejecido.',
										icon: <Layers />,
									},
									{
										titulo: 'Lacado cataforético',
										descripcion:
											'Recubrimiento de laca transparente que ofrece alto brillo y resistencia superior.',
										icon: <Shapes />,
									},
								].map((proceso, index) => (
									<div
										key={index}
										className="p-6 transition-colors border rounded-lg border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10"
									>
										<div className="mb-4 text-primary-500">
											{proceso.icon}
										</div>
										<h3 className="mb-3 text-xl font-medium">
											{proceso.titulo}
										</h3>
										<p className="text-white/70">
											{proceso.descripcion}
										</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Características Destacadas */}
					<section className="mb-24">
						<div className="grid gap-8 md:grid-cols-3">
							{[
								{
									icon: (
										<Shield className="w-10 h-10 text-primary" />
									),
									title: 'Protección Superior',
									description:
										'Resistencia excepcional al desgaste y la oxidación para todos los metales base.',
								},
								{
									icon: (
										<Sparkles className="w-10 h-10 text-primary" />
									),
									title: 'Acabados Precisos',
									description:
										'Variedad de acabados decorativos que combinan estética y funcionalidad.',
								},
								{
									icon: (
										<Beaker className="w-10 h-10 text-primary" />
									),
									title: 'Versatilidad',
									description:
										'Aplicable sobre diversos materiales: acero, latón, cobre, zamak y más.',
								},
							].map((feature, index) => (
								<div
									key={index}
									className="p-8 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
								>
									<div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
										{feature.icon}
									</div>
									<h3 className="mb-4 text-xl font-medium text-primary">
										{feature.title}
									</h3>
									<p className="text-gray-600">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
