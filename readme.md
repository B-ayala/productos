## Descripción

Este proyecto realiza una petición GET a la API pública [Fake Store API](https://fakestoreapi.com/products) para obtener una lista de productos y mostrarlos por consola.


- Asegúrate de tener Node.js versión 18 o superior para usar `fetch` de forma nativa. Si usas una versión anterior, instala `node-fetch`.

---

## ¿Cómo lo probás?

1. **Instalá las dependencias** (si corresponde):
   npm install

2. **Arrancá el proyecto** usando los siguientes comandos desde la terminal, según lo que quieras hacer:

   - Para ver todos los productos:
     npm run start GET products

   - Para ver un producto por su ID:
     npm run start GET products/<idProducto>


   - Para agregar un producto nuevo:
     npm run start POST products "<titulo>" <precio> "<categoria>"

   - Para eliminar un producto por ID:
     npm run start DELETE products/<idProducto>


3. **Tips**:
   - Si te olvidás algún dato, la consola te tira el ejemplo de cómo usar el comando.
   - Los mensajes de error y éxito aparecen en la terminal

