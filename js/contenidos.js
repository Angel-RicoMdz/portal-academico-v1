/* EDITA ESTE ARCHIVO para agregar asignaturas y materiales.
   Los archivos locales se colocan en materiales/ y se enlazan con rutas relativas.
   No publiques información privada de estudiantes ni resultados académicos. */
window.PORTAL_DATA = {
  courses: [
    {id:'inteligencia-artificial',name:'Inteligencia Artificial y Redes Neuronales',short:'Inteligencia Artificial',category:'INTELIGENCIA ARTIFICIAL',icon:'◈',color:'purple',description:'Fundamentos de IA, perceptrones, redes neuronales y aprendizaje profundo.',topics:['Fundamentos y agentes inteligentes','Búsqueda y resolución de problemas','Perceptrón y redes multicapa','Entrenamiento y evaluación de modelos','Proyecto aplicado']},
    {id:'mecatronica-computacional',name:'Mecatrónica Computacional',short:'Mecatrónica Computacional',category:'SISTEMAS COMPUTACIONALES',icon:'⌘',color:'cyan',description:'Programación, modelado y herramientas computacionales aplicadas a sistemas mecatrónicos.',topics:['Programación científica con Python','Modelado de sistemas','Simulación numérica','Adquisición y análisis de datos','Integración de un prototipo']},
    {id:'arquitectura-robots',name:'Arquitectura de Robots',short:'Arquitectura de Robots',category:'ROBÓTICA',icon:'⬡',color:'orange',description:'Estructura de robots manipuladores, cinemática, actuadores y programación.',topics:['Clasificación de robots','Arquitecturas mecánicas','Cinemática directa e inversa','Sensores y actuadores','Programación de manipuladores']},
    {id:'reconocimiento-patrones',name:'Reconocimiento de Patrones 222',short:'Reconocimiento de Patrones',category:'CIENCIA DE DATOS',icon:'▧',color:'green',description:'Extracción de características, clasificación y validación de modelos.',topics:['Introducción al reconocimiento de patrones','Preprocesamiento de datos','Extracción y selección de características','Clasificadores supervisados','Métricas y validación']},
    {id:'sistemas-vision',name:'Sistemas de Visión',short:'Sistemas de Visión',category:'VISIÓN COMPUTACIONAL',icon:'◎',color:'red',description:'Adquisición, procesamiento y análisis de imágenes para aplicaciones industriales.',topics:['Formación y adquisición de imágenes','Filtrado espacial y frecuencial','Segmentación y morfología','Características y detección','Aplicaciones de inspección']},
    {id:'proyecto-imtc',name:'Proyecto IMTC',short:'Proyecto IMTC',category:'PROYECTOS',icon:'◇',color:'pink',description:'Planeación, desarrollo, documentación y presentación de proyectos integradores.',topics:['Planteamiento del problema','Objetivos y requerimientos','Metodología y cronograma','Prototipado y pruebas','Informe técnico y presentación']}
  ],
  resources: [
    {id:'ejemplo-beamer',course:'inteligencia-artificial',title:'Ejemplo: presentación de clase en PDF',topic:'Introducción',type:'presentacion',url:'materiales/ejemplos/presentacion-ejemplo.pdf',date:'',demo:true},
    {id:'guia-python',course:'mecatronica-computacional',title:'Ejemplo: práctica de programación en Python',topic:'Programación',type:'practica',url:'materiales/ejemplos/practica-ejemplo.pdf',date:'',demo:true},
    {id:'script-python',course:'mecatronica-computacional',title:'Ejemplo: código Python descargable',topic:'Programación',type:'codigo',url:'materiales/ejemplos/programa-ejemplo.py',date:'',demo:true}
     {
  id: 'ia-clase01',
  course: 'inteligencia-artificial',
  title: 'Clase 01 — Introducción a la IA',
  topic: 'Unidad 1',
  type: 'presentacion',
  url: 'materiales/ia/IA_clase_1_Introduccion_IA.pdf',
  date: '2026-10-22',
  demo: false
}
  ]
};
