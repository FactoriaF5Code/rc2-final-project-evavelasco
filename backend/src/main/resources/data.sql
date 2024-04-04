CREATE TABLE plantas(id INT AUTO_INCREMENT PRIMARY KEY,nombre VARCHAR(100), propiedades VARCHAR(250));
INSERT INTO plantas (nombre, propiedades) VALUES 
('Ortiga', 'Hierro, calcio, vitamina C y clorofila'),
('Diente de león', 'Diurético, depurativo y rico en antioxidantes'),
('Cola de caballo', 'Alto contenido en silicio, que fortalece cabello, piel y uñas'),
('Stevia', 'Edulcorante natural y propiedades antioxidantes'),
('Malva', 'Antiinflamatoria y calmante para el sistema respiratorio'),
('Perilla', 'Antioxidantes y antiinflamatorias'),
('Helicrisium italicum', 'Antiinflamatorias y cicatrizantes'),
('Llantén', 'Expectorantes y antiinflamatorias'),
('Tomillo', 'Antibacterianas y es bueno para el sistema respiratorio'),
('Melisa', 'Calmantes y digestivas'),
('Hierba luisa', 'Digestivas y calmantes'),
('Menta', 'Refrescante y ayuda a aliviar problemas digestivos'),
('Salvia', 'Antibacterianas y antioxidantes'),
('Té de roca', 'Digestivo y ayuda en problemas gastrointestinales'),
('Santolina', 'Antiinflamatoria y se usa en problemas digestivos'),
('Maravilla', 'Cicatrizantes y antiinflamatorias'),
('Anís verde', 'Digestivo y carminativo'),
('Romero', 'Estimulantes y antioxidantes'),
('Hipérico', 'Antidepresivas y cicatrizantes'),
('Milramas', 'Cicatrizantes y astringentes'),
('Bolsa de pastor', 'Hemostáticas'),
('Perilla', 'Antioxidantes y antiinflamatorias'),
('Flor de sauce', 'Antiinflamatorias y analgésicas'),
('Espino blanco', 'Cardiotónicas'),
('Lavanda', 'Relajante y ayuda a calmar la ansiedad'),
('Nepetia cataria', 'Calmante y se usa para problemas digestivos'),
('Romero', 'Estimulantes y antioxidantes'),
('Anís verde', 'Digestivo y carminativo'),
('Malvavisco', 'Calmante '),
('Hoja de nogal', 'Antiparasitarias,antiinflamatorias y antioxidantes'),
('Jengibre','Antisépticas, antioxidantes, expectorantes, antiinflamatorias y antimicrobianas'),
('Lúpulo', 'Antiinflamatoria y analgesico'),
('Marrubio', 'Calmante y antiinflamatorio'),
('Muérdago', 'Antiinflamatorias, sedantes suaves y diuréticas'),
('Pasiflora', 'Sedante y antiespasmódica'),
('Perejil', 'Diuréticas y antioxidantes'),
('Perilla', ' Antioxidantes y antiinflamatorias'),
('Pimpinela', 'Expectorante, antiséptica y astringente'),
('Raíz de valeriana', 'Calmante y antiespasmódico'),
('Regaliz', 'Calmante y antiinflamatorio'),
('Corteza de roble', 'Astringente y antiinflamatoria'),
('Santolina', 'Antiespasmódica y antiinflamatoria'),
('Ulmaria', ' Calmante, antiinflamatorio y antioxidantes.'),
('Verónica', 'Depurativa'),
('Leonurus cardiaca', ' Calmante, antiespasmódica y antidiarreico'),
('Manzanilla', ' Calmante '),
('Tomillo', '  antibacterianas y antioxidantes'),
('Ajenjo', ' Calmante, antiinflamatorio y como  agente vermífugo'),
('Alcachofera', 'Diuretica'),
('Alfalfa', 'Calmante'),
('Boldo', 'Coleréticas, diureticas y antioxidante'),
('Cardo mariano', 'Calmante y antiinflamatorio'),
('Celidonia', 'Antiasmáticas, antivírico y antimitótico'),
('Corteza de saúco', 'Diurética'),
('Fucus', 'Antiinflamatorias y antioxidantes'),
('Fumaria', 'Depurativo, espasmolíticas y descongestionantes'),
('Galio', 'Diurético y antiespasmódico'),
('Hoja de abedul', ' Calmante,diuretica y antiinflamatorio.'),
('Hoja de nogal', 'Calmante, antiinflamatorio y antimicrobiano'),
('Lavandula stoechas', 'Antisépticas, digestivas y cicatrizantes'),
('Limón','Antibacteriano'),
('Orégano','Antioxidantes y antimicrobianaas'),
('Canela', 'Antioxidante y antimicrobiana'),
('Brezo','diuréticas, antisépticas y antiinflamatorias'),
('Rompepiedras','diuréticas y antiinflamatorias');

 CREATE TABLE dolencias(id INT AUTO_INCREMENT PRIMARY KEY,nombre VARCHAR(100), receta VARCHAR(250));
INSERT INTO dolencias (nombre, receta) VALUES 
('Ácido úrico y gota','2-3 vasos de infusión al dia'),
('Alergias', '3-4 vasos de infusión al dia'),
('Digestión', 'Infusiones después de las comidas excesivas'),
('Halitosis', '2 vasos de infusión al dia'),
('Infección de orina', '3 vasos de infusión al dia'),
('Incontinencia urinaria', '1-2 vasos de infusión al dia, no tomar antes del atardecer'),
('Menstruación dolorosa', '2 vasos de infusión al dia, empezar 7 dias antes de la regla y durante la misma'),
('Resfriado 1','2-3 vasos de infusión al dia'),
('Resfriado 2','2-3 vasos de infusión al dia'),
('Sedante','1-2 vasos de infusión 45 minutos antes de ir a dormir'),
('Vigorizante', '2-3 vasos de infusión al dia'),
('Asma','3 vasos de infusión al dia'),
('Dolor de cabeza','1/2 pulgada jengibre crudo rallado, verter 2 tazas de agua hirviendo, reposar de 5 a 10 minutos, añadir jugo de limón y miel'),
('Anemia', '2-3 vasos de infusión al dia'),
('Asma',' 3 vasos de infusión al dia'),
('Colesteros', '2-3 vasos de infusión al dia'),
('Fortalecimiento de pelo', 'Limpiar el pelo con jabón natural y la infusión, dejar unos minutos'),
('Higado graso','2-3 vasos de infusión al dia'),
('Insomnio', '1-2 vasos al dia, uno despues de cenar o 30 minutos antes de ir a dormir'),
('Psoriasis', '1,5-2 litros de infusión caliente a lo largo del dia '),
('Menopausia','3 vasitos a lo largo del dia, hervir ingredientes 30 minutos y reposar 10'),
('Lumbago','3 tacitas al dia templada, antes de las comidas durante 60 dias'),
('Tos', '2 vasitos caliente mañana y noche'),
('Diarrea','Tomar a sorbos durante todo el dia'),
('Cálculos de riñon', '1-2 vasitos al dia');