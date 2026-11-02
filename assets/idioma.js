(function () {
  /* El español vive en el HTML. Cada clave es el texto exacto de un nodo o atributo. */
  var EN = {
    'Advance Medical Research Center · Estudios clínicos en Miami': 'Advance Medical Research Center · Clinical studies in Miami',
    'Estudios clínicos en Miami, con atención en español e inglés. Advance Medical Research Center, dirigido por la Dra. Ana Acosta.': 'Clinical studies in Miami, with care in Spanish and English. Advance Medical Research Center, led by Dr. Ana Acosta.',
    'Dra. Ana Acosta · Médica en Miami': 'Dr. Ana Acosta · Physician in Miami',
    'Dra. Ana Acosta, médica y propietaria de Advance Medical Research Center, en Miami.': 'Dr. Ana Acosta, physician and owner of Advance Medical Research Center in Miami.',
    'Línea de ayuda': 'Help desk',
    'Sitio': 'Site',
    'Idioma': 'Language',
    'Menú': 'Menu',
    'Accesibilidad': 'Accessibility',
    'A−: reducir texto': 'A−: decrease text size',
    'A+: aumentar texto': 'A+: increase text size',
    'Alto contraste': 'High contrast',
    'Centro': 'Center',
    'Dra. Acosta': 'Dr. Acosta',
    'Dra. Ana Acosta': 'Dr. Ana Acosta',
    'Estudios': 'Studies',
    'Cómo participar': 'How to join',
    'Preguntas': 'Questions',
    'Contacto': 'Contact',
    'Cerca de ti, en tu idioma': 'Close to you, in your language',
    'Estudios clínicos en Miami, con un equipo que te explica cada paso en español o inglés antes de que decidas.': 'Clinical studies in Miami, with a team that explains each step in Spanish or English before you decide.',
    'Hablar con el centro': 'Talk to the center',
    'Foto ilustrativa: investigadora en un microscopio': 'Illustrative photo: a researcher at a microscope',
    'Foto ilustrativa: enfermera toma la presión a un paciente': 'Illustrative photo: a nurse takes a patient\'s blood pressure',
    'Foto ilustrativa: Miami frente al agua': 'Illustrative photo: Miami by the water',
    'Áreas de estudio': 'Study areas',
    'Los estudios disponibles cambian con el tiempo. Llámanos para saber cuáles están abiertos hoy.': 'Available studies change over time. Call us to find out which ones are open today.',
    'Hipertensión': 'Hypertension',
    'VIH': 'HIV',
    'Enfermedad de Alzheimer': 'Alzheimer\'s disease',
    'Vacunación': 'Vaccination',
    'Contáctanos': 'Contact us',
    'Cuéntanos tu condición y te decimos qué estudios podrían ajustarse a ti.': 'Tell us about your condition and we will let you know which studies may be a fit.',
    'Evaluación': 'Evaluation',
    'El equipo médico revisa si cumples los requisitos y resuelve tus dudas.': 'The medical team checks whether you meet the requirements and answers your questions.',
    'Seguimiento': 'Follow-up',
    'Si participas, recibes monitoreo médico durante todo el estudio.': 'If you take part, you receive medical monitoring throughout the study.',
    'Tus derechos como participante': 'Your rights as a participant',
    'Consentimiento informado': 'Informed consent',
    'Recibes toda la información por escrito y puedes hacer todas tus preguntas.': 'You receive all the information in writing and can ask all your questions.',
    'Participación voluntaria': 'Voluntary participation',
    'Puedes retirarte en cualquier momento sin que cambie tu atención médica.': 'You can withdraw at any time without it changing your medical care.',
    'Revisión ética independiente': 'Independent ethics review',
    'Un comité de ética (IRB) revisa los estudios para proteger a los participantes.': 'An ethics committee (IRB) reviews the studies to protect participants.',
    'Médica y propietaria de Advance Medical Research Center, en Miami.': 'Physician and owner of Advance Medical Research Center in Miami.',
    'Conocer a la doctora': 'Meet the doctor',
    'Preguntas frecuentes': 'Frequently asked questions',
    '¿Qué es un estudio clínico?': 'What is a clinical study?',
    'Es una investigación médica en la que voluntarios prueban un tratamiento o una vacuna nuevos para saber si son seguros y si funcionan.': 'It is medical research in which volunteers try a new treatment or vaccine to find out whether it is safe and whether it works.',
    '¿Es obligatorio continuar?': 'Do I have to keep going?',
    'No. Tu participación es voluntaria y puedes retirarte en cualquier momento.': 'No. Participation is voluntary and you can withdraw at any time.',
    '¿Tiene costo participar?': 'Does it cost anything to participate?',
    'Antes de que decidas te explicamos los detalles de cada estudio, incluyendo si hay costos o compensación.': 'Before you decide, we explain the details of each study, including whether there are costs or compensation.',
    'Hablemos': 'Let\'s talk',
    'Dirección': 'Address',
    'Horario': 'Hours',
    'Lunes a viernes: 9:00 AM – 5:00 PM': 'Monday to Friday: 9:00 AM – 5:00 PM',
    'Sábado y domingo: cerrado': 'Saturday and Sunday: closed',
    'Correo': 'Email',
    'Nombre': 'Name',
    'Correo electrónico': 'Email',
    'Soy…': 'I am a…',
    'Paciente / Participante': 'Patient / Participant',
    'Médico / Investigador': 'Physician / Investigator',
    'Patrocinador / CRO': 'Sponsor / CRO',
    'Otro': 'Other',
    'Mensaje': 'Message',
    'Enviar mensaje': 'Send message',
    'Se abrirá tu aplicación de correo. Si no se abre, llámanos o escríbenos directamente.': 'Your email app will open. If it does not, call or email us directly.',
    'La información de este sitio es educativa y no reemplaza la consulta con un médico.': 'The information on this site is educational and does not replace a consultation with a physician.',
    'Imágenes ilustrativas: Linda Bartlett y National Cancer Institute (dominio público), Zoshua Colah (Unsplash).': 'Illustrative images: Linda Bartlett and National Cancer Institute (public domain), Zoshua Colah (Unsplash).',
    'Contactar a la doctora': 'Contact the doctor',
    'Sobre mí': 'About me',
    'Soy médica y dirijo Advance Medical Research Center, donde trabajo junto a mi equipo para que más pacientes conozcan y puedan acceder a estudios clínicos, con información clara y acompañamiento en cada etapa.': 'I am a physician and I lead Advance Medical Research Center, where my team and I work so that more patients can learn about and access clinical studies, with clear information and support at every stage.',
    'Formación y rol': 'Education and role',
    'Formación': 'Education',
    'Doctora en Medicina (MD), Ross University School of Medicine': 'Doctor of Medicine (MD), Ross University School of Medicine',
    'Rol': 'Role',
    'Propietaria y presidenta de Advance Medical Research Center': 'Owner and president of Advance Medical Research Center',
    'Idiomas': 'Languages',
    'Español e inglés': 'Spanish and English',
    'Lo que me guía': 'What guides me',
    'Información clara': 'Clear information',
    'Explicar cada estudio con calma para que decidas con confianza.': 'Explaining each study calmly so you can decide with confidence.',
    'Acompañamiento': 'Support',
    'Estar presente antes, durante y después del estudio.': 'Being there before, during and after the study.',
    'Comunidad': 'Community',
    'Llevar la investigación clínica a más familias de Miami.': 'Bringing clinical research to more Miami families.',
    'Trayectoria': 'Background',
    '2012 · Fundación del centro': '2012 · Founding of the center',
    'Advance Medical Research Center inicia operaciones en Miami, Florida.': 'Advance Medical Research Center begins operating in Miami, Florida.',
    'Hoy · Dirección del centro': 'Today · Leading the center',
    'Lidero Advance Medical Research Center y a su equipo.': 'I lead Advance Medical Research Center and its team.',
    'Consultorio': 'Office',
    'Teléfono': 'Phone'
  };

  var nodes = [], attrs = [];
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    var n = walker.currentNode, key = n.nodeValue.trim();
    if (key && EN[key] !== undefined) nodes.push({ node: n, es: n.nodeValue, key: key });
  }
  document.querySelectorAll('[alt],[aria-label],meta[name="description"]').forEach(function (el) {
    ['alt', 'aria-label', 'content'].forEach(function (a) {
      var v = el.getAttribute(a);
      if (v && EN[v] !== undefined) attrs.push({ el: el, attr: a, es: v });
    });
  });
  var titleES = document.title;
  var buttons = document.querySelectorAll('[data-l]');

  function apply(l) {
    document.documentElement.lang = l;
    nodes.forEach(function (x) { x.node.nodeValue = l === 'en' ? x.es.replace(x.key, EN[x.key]) : x.es; });
    attrs.forEach(function (x) { x.el.setAttribute(x.attr, l === 'en' ? EN[x.es] : x.es); });
    document.title = l === 'en' ? (EN[titleES] || titleES) : titleES;
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.l === l)); });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.dataset.l);
      try { localStorage.setItem('lang', b.dataset.l); } catch (e) {}
    });
  });

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved !== 'es' && saved !== 'en') saved = (navigator.language || 'en').slice(0, 2) === 'es' ? 'es' : 'en';
  apply(saved);
})();
