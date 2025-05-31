import { url } from './.env.js';

// Función para obtener todos los productos x titulo
const fetchProducts = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const titleProducts = data.map(({ title }) => title);
        console.log('productos: ', titleProducts);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }   
}
// Función para obtener un producto por id

const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        if (!response.ok) {
            console.log(`Error al llamar al producto con id ${id}`);
        } else {
            const data = await response.json();
            console.log('Producto encontrado:', data);
            return data;
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }   
}

//metodo para agregar un producto

const fetchProductPost = async(product) =>{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)       
    });
    const data = await response.json();
    console.log('Producto nuevo agregado:', data);
    return data;
}

//metodo para eliminar por id

const fetchProductDelete = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        console.log(`Error al eliminar el producto con id ${id}`);
    } else {
        console.log(`Producto con id ${id} eliminado correctamente`);
    }
}   

const [, , method, resource, ...args] = process.argv;

if (method === 'GET' && resource) {
    const [resourceName, resourceId] = resource.split('/');
    if (resourceName === 'products' && !resourceId) {
        fetchProducts();
    } else if (resourceName === 'products' && resourceId) {
        fetchProductById(resourceId);
    } else {
        console.log('Ingresaste mal el comando usa:');
        console.log('  npm run start GET products');
        console.log('  npm run start GET products/<productId>');
    }
} else if (method === 'POST' && resource) {
    const [resourceName, resourceId] = resource.split('/');
    if (resourceName === 'products' && !resourceId) {
        const [title, price, category] = args;
        if (!title || !price || !category) {
            console.log('faltan datos, usa:');
            console.log('  npm run start POST products <title> <price> <category>');
        } else {
            const product = {
                title,
                price: Number(price),
                category
            };
            fetchProductPost(product);
        }
    } else {
        console.log('Ingresaste mal el comando usa:');
        console.log('  npm run start POST products <title> <price> <category>');
    }
} else if (method === 'DELETE' && resource) {
    const [resourceName, resourceId] = resource.split('/');
    if (resourceName === 'products' && resourceId) {
        fetchProductDelete(resourceId);
    } else {
        console.log('Ingresaste mal el comando usa:');
        console.log('  npm run start DELETE products/<productId>');
    }
} else {
    console.log('Ingresaste mal el comando usa:');
    console.log('  npm run start GET products');
    console.log('  npm run start GET products/<productId>');
}