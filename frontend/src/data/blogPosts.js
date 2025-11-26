// src/data/blogPosts.js

export const blogPosts = [
    {
        slug: "como-elegir-computadora-para-tu-negocio",
        titulo: "¿Cómo elegir la computadora ideal para tu negocio?",
        fecha: "Febrero 2025",
        categoria: "Equipos de cómputo",
        resumen:
            "Guía práctica para elegir computadoras confiables, escalables y optimizadas para el trabajo diario de tu empresa.",
        imagen:
            "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1200", // <-- Usar import local en Blog.jsx
        contenido: `
En este artículo te compartimos algunos puntos clave para elegir la computadora correcta para tu negocio, sin gastar de más y cuidando el rendimiento a largo plazo.

1. Define el uso principal
No es lo mismo una computadora para oficina administrativa que una para diseño, producción musical o edición de video. Entre más exigente sea el trabajo, más procesador, RAM y almacenamiento rápido necesitarás.

2. Procesador y memoria RAM
Para uso de oficina (paquetería, sistema de facturación, navegación, videollamadas) un procesador moderno tipo Intel i5 / Ryzen 5 con 8–16 GB de RAM suele ser suficiente. Para tareas pesadas, conviene subir a i7 / Ryzen 7 y 16–32 GB de RAM.

3. Almacenamiento SSD
Hoy en día, el SSD es casi obligatorio. Mejora muchísimo la velocidad de arranque, apertura de programas y respuesta general del sistema. Para oficinas, 256–512 GB suelen ser suficientes, aunque siempre se puede complementar con almacenamiento en la nube o NAS.

4. Conectividad y puertos
Verifica que el equipo cuente con los puertos que necesitas (HDMI, USB, red Ethernet, etc.) y con Wi-Fi estable. En entornos empresariales, una buena conectividad es clave para evitar cuellos de botella.

En iComp podemos asesorarte para elegir el equipo ideal según las necesidades reales de tu empresa, evitando compras innecesarias y priorizando la estabilidad a largo plazo.
        `.trim(), // .trim() asegura que el contenido se muestre limpio
    },
    {
        slug: "mantenimiento-preventivo-equipos-computo",
        titulo: "Mantenimiento preventivo: la clave para alargar la vida de tus equipos",
        fecha: "Enero 2025",
        categoria: "Mantenimiento",
        resumen:
            "Te contamos por qué el mantenimiento preventivo es una inversión inteligente y no un gasto extra.",
        imagen:
            "https://elinge.co/wp-content/uploads/2023/08/mantenimiento-preventivo-de-computadores-ID-01.webp", // <-- Usar import local en Blog.jsx
        contenido: `
Muchos negocios esperan a que una computadora “muera” para reemplazarla o mandarla a reparar. El problema es que eso casi siempre ocurre en el peor momento: cierres de mes, temporadas altas o entregas importantes.

El mantenimiento preventivo ayuda a:

- Reducir fallas inesperadas.
- Mantener el rendimiento del equipo.
- Evitar sobrecalentamientos y daños físicos.
- Alargar la vida útil del hardware.

¿Qué incluye un mantenimiento preventivo profesional?

- Limpieza interna (polvo, ventiladores, disipadores).
- Revisión de temperaturas.
- Verificación de disco, memoria RAM y fuente de poder.
- Actualización de sistema y programas críticos.
- Revisión de seguridad básica.

Programar mantenimientos periódicos (por ejemplo, cada 6 o 12 meses) es una forma sencilla de proteger la inversión en tecnología de tu empresa.
        `.trim(),
    },
    {
        slug: "seguridad-basica-redes-pequenas-empresas",
        titulo: "Seguridad básica en redes para pequeñas empresas",
        fecha: "Diciembre 2024",
        categoria: "Redes y seguridad",
        resumen:
            "Buenas prácticas esenciales para proteger la red de tu negocio sin necesidad de grandes inversiones.",
        imagen:
            "https://images.pexels.com/photos/7887817/pexels-photo-7887817.jpeg?auto=compress&cs=tinysrgb&w=1200", // <-- Usar import local en Blog.jsx
        contenido: `
La red de tu negocio es el corazón de la operación: ahí pasan correos, sistemas de facturación, documentos y acceso a información sensible. Cuidarla es fundamental, aunque seas una empresa pequeña.

Algunas recomendaciones básicas:

1. Modifica las contraseñas por defecto
Routers, switches administrables y cámaras IP suelen venir con usuarios y contraseñas genéricos. Cambiarlos es el primer paso para evitar accesos no autorizados.

2. Separa la red de invitados
Cuando es posible, crea una red Wi-Fi separada para visitantes, para que no tengan acceso directo a los dispositivos internos de la empresa.

3. Mantén el firmware actualizado
Actualizar el firmware de tus dispositivos de red corrige vulnerabilidades y mejora la estabilidad.

4. Respaldos periódicos
Aunque tu red esté protegida, siempre es vital tener respaldos de la información crítica en ubicaciones seguras.

En iComp podemos ayudarte a diseñar o revisar la red de tu negocio para que sea estable, segura y preparada para crecer.
        `.trim(),
    },
];