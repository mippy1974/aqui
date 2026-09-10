/* aquí - editable page content: Mission, Privacy Policy, Terms of Use.

   Everything in this file is plain text. Edit it here and the pages update.
   In the full app this same content moves into the admin area so it can be
   edited from the browser, exactly like the Mission page.

   Structure: each page has an `en` and an `es` version, a title, a last
   updated date, and a list of sections. A section is a heading plus one or
   more paragraphs. Add a section by copying an existing block. */

window.CONTENT = {

  mission: {
    en: {
      title: 'Our mission',
      updated: '',
      lead: 'Supporting local.',
      sections: [
        { h: 'Why aquí exists', p: [
          'Panama is full of people making good things. Natural skincare, herbal remedies, ferments, bread, chocolate, textiles, wooden toys. Most of it is made in small quantities by people who know exactly what went into it.',
          'The problem is finding any of it. A brand might live on Instagram, sell through a WhatsApp group, and appear at one market on one Saturday a month. If you do not already know it exists, you will not find it.'
        ]},
        { h: 'What we do', p: [
          'aquí brings that scattered world into one place. Search for a product, browse a category, or simply look at what is available near a town you are travelling to.',
          'We answer two questions: what is available, and where or how can you get it. Then we send you straight to the brand.'
        ]},
        { h: 'Curated, not automated', p: [
          'There is no algorithm deciding what belongs here. Every brand on aquí is chosen by hand, one at a time.',
          'Being made in Panama is not enough on its own, and neither is being sold in Panama. What matters is that someone is genuinely making something, with care, and that we would recommend it to a friend.'
        ]},
        { h: 'We do not sell anything', p: [
          'aquí is not a shop. There is no cart, no checkout, no commission and no delivery service. Nothing is paid to be listed and nothing is ranked by who pays.',
          'When you find something you want, you buy it from the brand directly, on their own terms.'
        ]}
      ]
    },
    es: {
      title: 'Nuestra misión',
      updated: '',
      lead: 'Apoyando lo local.',
      sections: [
        { h: 'Por qué existe aquí', p: [
          'Panamá está lleno de personas que hacen cosas buenas. Cuidado natural de la piel, remedios de hierbas, fermentos, pan, chocolate, textiles, juguetes de madera. Casi todo se produce en cantidades pequeñas, por personas que saben exactamente qué lleva cada cosa.',
          'El problema es encontrarlo. Una marca puede vivir en Instagram, vender por un grupo de WhatsApp y aparecer en una feria un sábado al mes. Si no sabes que existe, no la vas a encontrar.'
        ]},
        { h: 'Qué hacemos', p: [
          'aquí reúne ese mundo disperso en un solo lugar. Busca un producto, explora una categoría, o simplemente mira qué hay cerca del pueblo al que vas a viajar.',
          'Respondemos dos preguntas: qué existe, y dónde o cómo conseguirlo. Después te llevamos directo a la marca.'
        ]},
        { h: 'Curado, no automatizado', p: [
          'No hay un algoritmo decidiendo qué entra. Cada marca en aquí se elige a mano, una por una.',
          'Estar hecho en Panamá no basta por sí solo, y venderse en Panamá tampoco. Lo que importa es que alguien esté haciendo algo de verdad, con cuidado, y que se lo recomendaríamos a una amiga.'
        ]},
        { h: 'No vendemos nada', p: [
          'aquí no es una tienda. No hay carrito, ni pago, ni comisión, ni servicio de entrega. Nadie paga por aparecer y nada se ordena según quién paga.',
          'Cuando encuentras algo que quieres, lo compras directamente a la marca, en sus propios términos.'
        ]}
      ]
    }
  },

  privacy: {
    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: 10 September 2026',
      lead: 'Short version: aquí has no accounts, no logins and no advertising. We do not want your personal data and we collect as little of it as we can.',
      sections: [
        { h: '1. Who we are', p: [
          'aquí is a curated discovery app for natural products and locally or artisan made products in Panama. It is operated by the aquí team in Panama.',
          'Questions about this policy can be sent to the contact address at the end of this page.'
        ]},
        { h: '2. No account is needed', p: [
          'You can use every part of aquí without registering. We do not ask for your name, your email address or your phone number, and there is nothing to log in to.',
          'Because there is no account, there is no profile of you, no history of your searches tied to you, and nothing for us to hand over or lose.'
        ]},
        { h: '3. Location', p: [
          'You can type a location yourself. When you do, that town is used to run the search and is remembered only in your own browser so you do not have to type it again. It is not sent to us.',
          'You can also press "Use my location". If you do, your browser will ask your permission first. If you agree, the app reads your approximate coordinates once, matches them to the nearest town in its own list, and uses that town for the search.',
          'Your coordinates are not stored, not written to a server, and not kept after the search. If you refuse permission, everything else in the app keeps working. You can withdraw the permission at any time in your browser or phone settings.'
        ]},
        { h: '4. IP address and device information', p: [
          'Like every website, aquí is delivered to you by a hosting provider, and that provider records the technical details of the request: your IP address, the date and time, the page requested, and the browser and operating system you are using.',
          'These records exist so the service can run and stay secure. We do not use them to identify you and we do not combine them with anything else.'
        ]},
        { h: '5. Analytics', p: [
          'This version of aquí runs no analytics. There is no Google Analytics, no advertising pixel, no tracking script and no third party tag of any kind.',
          'If analytics are added later, this policy will be updated first, and we will use a service that measures pages rather than people, with IP addresses shortened and no cross site tracking.'
        ]},
        { h: '6. Cookies and browser storage', p: [
          'aquí sets no cookies and no advertising identifiers.',
          'The app does save two small preferences inside your own browser, using local storage: the language you chose, and the last location and radius you searched. This stays on your device, is never sent anywhere, and disappears when you clear your browsing data.'
        ]},
        { h: '7. Links to brands and external services', p: [
          'Brand profiles link out to websites, Instagram profiles and WhatsApp numbers that belong to the brands themselves.',
          'Once you follow one of those links you have left aquí, and the privacy policy of that other service applies instead of this one. We have no control over what they collect, and opening a WhatsApp link will reveal your phone number to that brand in the normal way, exactly as if you had messaged them yourself.'
        ]},
        { h: '8. Hosting', p: [
          'The app is served as static files from a hosting provider. Server logs of the kind described in section 4 are kept by that provider for a short period for security and diagnostics.',
          'No database of users exists, because there are no users to store.'
        ]},
        { h: '9. Children', p: [
          'aquí is a general audience app about products. It is not directed at children and it does not knowingly collect information from them.'
        ]},
        { h: '10. Your rights', p: [
          'Panama protects personal data under Law 81 of 2019, and visitors from other countries may have rights under their own law.',
          'Because we hold no account data, there is normally nothing personal for us to show you, correct or delete. If you believe we hold something about you, write to us and we will look and tell you honestly what we find.'
        ]},
        { h: '11. Changes to this policy', p: [
          'If what the app collects changes, this page changes with it, and the date at the top will tell you when.'
        ]},
        { h: '12. Contact', p: [
          'Write to us at hola@aqui.app with any question about this policy or about your data.'
        ]}
      ]
    },
    es: {
      title: 'Política de Privacidad',
      updated: 'Última actualización: 10 de septiembre de 2026',
      lead: 'Versión corta: aquí no tiene cuentas, ni inicio de sesión, ni publicidad. No queremos tus datos personales y recogemos los menos posibles.',
      sections: [
        { h: '1. Quiénes somos', p: [
          'aquí es una app de descubrimiento curado de productos naturales y productos locales o artesanales de Panamá. La opera el equipo de aquí en Panamá.',
          'Cualquier consulta sobre esta política puede enviarse a la dirección de contacto al final de esta página.'
        ]},
        { h: '2. No hace falta una cuenta', p: [
          'Puedes usar toda la app sin registrarte. No pedimos tu nombre, tu correo ni tu teléfono, y no hay ningún lugar donde iniciar sesión.',
          'Como no hay cuenta, no existe un perfil tuyo, ni un historial de búsquedas asociado a ti, ni nada que podamos entregar o perder.'
        ]},
        { h: '3. Ubicación', p: [
          'Puedes escribir una ubicación tú misma. Esa ubicación se usa para hacer la búsqueda y se guarda solo en tu propio navegador para que no tengas que escribirla de nuevo. No se envía a nosotros.',
          'También puedes tocar "Usar mi ubicación". Si lo haces, tu navegador te pedirá permiso primero. Si aceptas, la app lee tus coordenadas aproximadas una sola vez, las compara con el pueblo más cercano de su propia lista, y usa ese pueblo para la búsqueda.',
          'Tus coordenadas no se guardan, no se envían a ningún servidor y no se conservan después de la búsqueda. Si no das permiso, todo lo demás sigue funcionando. Puedes retirar el permiso cuando quieras desde la configuración de tu navegador o de tu teléfono.'
        ]},
        { h: '4. Dirección IP e información del dispositivo', p: [
          'Como todo sitio web, aquí llega a ti a través de un proveedor de alojamiento, y ese proveedor registra los datos técnicos de la solicitud: tu dirección IP, la fecha y la hora, la página solicitada, y el navegador y sistema operativo que usas.',
          'Estos registros existen para que el servicio funcione y se mantenga seguro. No los usamos para identificarte y no los combinamos con nada más.'
        ]},
        { h: '5. Analítica', p: [
          'Esta versión de aquí no usa analítica. No hay Google Analytics, ni píxel publicitario, ni script de rastreo, ni etiqueta de terceros de ningún tipo.',
          'Si en el futuro se agrega analítica, primero se actualizará esta política, y usaremos un servicio que mide páginas y no personas, con direcciones IP acortadas y sin rastreo entre sitios.'
        ]},
        { h: '6. Cookies y almacenamiento del navegador', p: [
          'aquí no usa cookies ni identificadores publicitarios.',
          'La app sí guarda dos preferencias pequeñas dentro de tu propio navegador, con almacenamiento local: el idioma que elegiste, y la última ubicación y radio que buscaste. Eso se queda en tu dispositivo, nunca se envía a ningún lado, y desaparece cuando borras los datos de navegación.'
        ]},
        { h: '7. Enlaces a marcas y servicios externos', p: [
          'Los perfiles de marca enlazan a sitios web, perfiles de Instagram y números de WhatsApp que pertenecen a las propias marcas.',
          'Al seguir uno de esos enlaces ya saliste de aquí, y aplica la política de privacidad de ese otro servicio en lugar de esta. No tenemos control sobre lo que recogen, y abrir un enlace de WhatsApp mostrará tu número a esa marca de la forma habitual, igual que si le hubieras escrito tú.'
        ]},
        { h: '8. Alojamiento', p: [
          'La app se entrega como archivos estáticos desde un proveedor de alojamiento. Ese proveedor conserva registros del tipo descrito en la sección 4 por un período corto, por seguridad y diagnóstico.',
          'No existe una base de datos de usuarios, porque no hay usuarios que guardar.'
        ]},
        { h: '9. Niñas y niños', p: [
          'aquí es una app de público general sobre productos. No está dirigida a menores y no recoge información de ellos a sabiendas.'
        ]},
        { h: '10. Tus derechos', p: [
          'Panamá protege los datos personales mediante la Ley 81 de 2019, y quienes nos visitan desde otros países pueden tener derechos bajo su propia legislación.',
          'Como no guardamos datos de cuenta, normalmente no hay nada personal que mostrarte, corregir o borrar. Si crees que tenemos algo tuyo, escríbenos y revisaremos y te diremos con honestidad qué encontramos.'
        ]},
        { h: '11. Cambios en esta política', p: [
          'Si cambia lo que la app recoge, esta página cambia con ello, y la fecha de arriba te dirá cuándo.'
        ]},
        { h: '12. Contacto', p: [
          'Escríbenos a hola@aqui.app con cualquier pregunta sobre esta política o sobre tus datos.'
        ]}
      ]
    }
  },

  terms: {
    en: {
      title: 'Terms of Use',
      updated: 'Last updated: 10 September 2026',
      lead: 'aquí helps you find brands. It does not sell you anything, and it is not a party to whatever you buy afterwards.',
      sections: [
        { h: '1. What aquí is', p: [
          'aquí is a curated directory of brands in Panama making natural, local or artisan products. It exists to answer two questions: what is available, and where or how you can get it.',
          'By using the app you accept these terms. If you do not accept them, please do not use the app.'
        ]},
        { h: '2. aquí is not a marketplace', p: [
          'Nothing is sold through aquí. There is no cart, no checkout, no payment processing, no stock, no delivery service and no commission.',
          'Any purchase happens entirely between you and the brand, outside this app, under the brand\'s own terms. We are not the seller, the agent or the guarantor, and we take no part in the transaction.'
        ]},
        { h: '3. Curation', p: [
          'Brands are selected by hand. Inclusion means we found the brand interesting enough to list, and nothing more.',
          'It is not a certification, an endorsement of safety or quality, a medical recommendation, or a promise about ingredients, methods or claims. Judge each brand for yourself.'
        ]},
        { h: '4. Accuracy of information', p: [
          'Brand details, products, points of sale, opening days and shipping coverage are supplied by the brands or gathered by us, and they change often.',
          'We try to keep the app current but cannot promise that any listing is complete or correct at the moment you read it. Prices are not shown here at all. Please confirm anything that matters with the brand before you travel or buy.'
        ]},
        { h: '5. Location and radius results', p: [
          'A radius search is based on the coordinates recorded for a brand\'s points of sale, measured in a straight line, not by road.',
          'A brand appearing in your results does not mean the product is in stock that day. It means the brand has a point of sale within your radius, or ships to your location, or both.'
        ]},
        { h: '6. Links to other services', p: [
          'Brand profiles link to websites, Instagram accounts and WhatsApp numbers we do not control. We are not responsible for their content, their availability or their handling of your data.'
        ]},
        { h: '7. Content and intellectual property', p: [
          'The aquí name, design and compiled directory belong to aquí. Brand names, logos, photographs and descriptions belong to the brands.',
          'You may use aquí to find and share brands. Copying the directory as a whole, scraping it, or republishing it as your own is not permitted.',
          'If you are a brand and want your listing corrected or removed, write to us and we will act on it.'
        ]},
        { h: '8. Acceptable use', p: [
          'Please do not attempt to disrupt the app, extract its data in bulk, or use it to send unsolicited messages to the brands listed.'
        ]},
        { h: '9. Availability and liability', p: [
          'aquí is provided as it is. We do not promise it will always be available or free of errors.',
          'To the extent the law allows, we are not liable for loss arising from your use of the app, from information that turned out to be out of date, or from any dealing between you and a brand. Nothing here limits liability that cannot be limited by law.'
        ]},
        { h: '10. Changes', p: [
          'These terms may change as the app develops. The date at the top shows the current version.'
        ]},
        { h: '11. Governing law and contact', p: [
          'These terms are governed by the laws of the Republic of Panama.',
          'Write to us at hola@aqui.app.'
        ]}
      ]
    },
    es: {
      title: 'Términos de Uso',
      updated: 'Última actualización: 10 de septiembre de 2026',
      lead: 'aquí te ayuda a encontrar marcas. No te vende nada, y no es parte de lo que compres después.',
      sections: [
        { h: '1. Qué es aquí', p: [
          'aquí es un directorio curado de marcas en Panamá que hacen productos naturales, locales o artesanales. Existe para responder dos preguntas: qué hay, y dónde o cómo conseguirlo.',
          'Al usar la app aceptas estos términos. Si no los aceptas, por favor no uses la app.'
        ]},
        { h: '2. aquí no es un marketplace', p: [
          'Nada se vende a través de aquí. No hay carrito, ni pago, ni procesamiento de pagos, ni inventario, ni servicio de entrega, ni comisión.',
          'Cualquier compra ocurre completamente entre tú y la marca, fuera de esta app, bajo los términos de la marca. No somos vendedor, ni agente, ni garante, y no participamos en la transacción.'
        ]},
        { h: '3. Curaduría', p: [
          'Las marcas se eligen a mano. Aparecer aquí significa que la marca nos pareció lo bastante interesante como para incluirla, y nada más.',
          'No es una certificación, ni un aval de seguridad o calidad, ni una recomendación médica, ni una promesa sobre ingredientes, métodos o afirmaciones. Evalúa cada marca por tu cuenta.'
        ]},
        { h: '4. Exactitud de la información', p: [
          'Los datos de marca, productos, puntos de venta, días de atención y cobertura de envío los aportan las marcas o los recogemos nosotros, y cambian con frecuencia.',
          'Intentamos mantener la app al día, pero no podemos prometer que un perfil esté completo o correcto en el momento en que lo leas. Los precios no se muestran aquí. Por favor confirma con la marca cualquier cosa importante antes de viajar o comprar.'
        ]},
        { h: '5. Resultados por ubicación y radio', p: [
          'La búsqueda por radio se basa en las coordenadas registradas para los puntos de venta de la marca, medidas en línea recta y no por carretera.',
          'Que una marca aparezca en tus resultados no significa que el producto esté disponible ese día. Significa que la marca tiene un punto de venta dentro de tu radio, o que envía a tu ubicación, o ambas cosas.'
        ]},
        { h: '6. Enlaces a otros servicios', p: [
          'Los perfiles de marca enlazan a sitios web, cuentas de Instagram y números de WhatsApp que no controlamos. No somos responsables de su contenido, su disponibilidad ni del manejo que hagan de tus datos.'
        ]},
        { h: '7. Contenido y propiedad intelectual', p: [
          'El nombre aquí, su diseño y el directorio compilado pertenecen a aquí. Los nombres de marca, logos, fotografías y descripciones pertenecen a las marcas.',
          'Puedes usar aquí para encontrar y compartir marcas. No está permitido copiar el directorio completo, extraerlo de forma automatizada, ni republicarlo como propio.',
          'Si eres una marca y quieres que corrijamos o retiremos tu perfil, escríbenos y lo haremos.'
        ]},
        { h: '8. Uso aceptable', p: [
          'Por favor no intentes interrumpir el funcionamiento de la app, extraer sus datos de forma masiva, ni usarla para enviar mensajes no solicitados a las marcas listadas.'
        ]},
        { h: '9. Disponibilidad y responsabilidad', p: [
          'aquí se ofrece tal como está. No prometemos que esté siempre disponible ni libre de errores.',
          'En la medida en que la ley lo permita, no somos responsables por pérdidas derivadas del uso de la app, de información que resultó desactualizada, ni de cualquier trato entre tú y una marca. Nada de esto limita responsabilidades que la ley no permite limitar.'
        ]},
        { h: '10. Cambios', p: [
          'Estos términos pueden cambiar a medida que la app evolucione. La fecha de arriba indica la versión vigente.'
        ]},
        { h: '11. Ley aplicable y contacto', p: [
          'Estos términos se rigen por las leyes de la República de Panamá.',
          'Escríbenos a hola@aqui.app.'
        ]}
      ]
    }
  }
};
