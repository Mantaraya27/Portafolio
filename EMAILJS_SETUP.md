# Configuración de EmailJS

## Pasos para configurar EmailJS en tu proyecto

### 1. Crear cuenta en EmailJS
- Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta gratuita
- Inicia sesión en tu dashboard

### 2. Configurar un servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Guarda el **Service ID** que se genera

### 3. Crear una plantilla de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Diseña tu plantilla con las siguientes variables:
   - `{{name}}` - Nombre del remitente
   - `{{email}}` - Email del remitente
   - `{{message}}` - Mensaje del remitente
4. Guarda la plantilla y copia el **Template ID**

### 4. Obtener tu Public Key
1. Ve a "Account" en el menú lateral
2. Copia tu **Public Key**

### 5. Configurar las variables de entorno
Crea un archivo `.env.local` en la raíz de tu proyecto con:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### 6. Ejemplo de plantilla de email
```
Nuevo mensaje de contacto

Nombre: {{name}}
Email: {{email}}
Mensaje: {{message}}

---
Enviado desde tu portafolio web
```

### 7. Verificar la configuración
- Asegúrate de que todas las variables de entorno estén configuradas
- Reinicia tu servidor de desarrollo
- Prueba el formulario de contacto

## Notas importantes
- Las variables de entorno deben comenzar con `NEXT_PUBLIC_` para ser accesibles en el cliente
- Nunca compartas tus claves privadas
- EmailJS tiene un límite gratuito de 200 emails por mes
- Para producción, considera actualizar a un plan pagado 