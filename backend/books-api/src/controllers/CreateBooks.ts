import { Request, Response } from "express"

class CreateBooks{
    handle(request: Request, response: Response){
        return response.json([
            {
                id: '1',
                name: 'O pequeno príncepe',
                price: 20,
                quantity: 1,
                category: 'Literatura',
                img: 'https://images-na.ssl-images-amazon.com/images/I/41mbMabCv5L._SX336_BO1,204,203,200_.jpg'
            },
            {
                id: '2',
                name: 'As Crônicas de Nárnia',
                price: 45,
                quantity: 1,
                category: 'Aventura',
                img: 'https://images-na.ssl-images-amazon.com/images/I/71yJLhQekBL.jpg'
            },
            {
                id: '3',
                name: 'Orgulho e Preconceito',
                price: 25,
                quantity: 1,
                category: 'Romance',
                img: 'https://images-na.ssl-images-amazon.com/images/I/51kS4++58fL.jpg'
            },
            {
                id: '4',
                name: '1984',
                price: 60,
                quantity: 1,
                category: 'Ficção Científica Social',
                img: 'https://images-na.ssl-images-amazon.com/images/I/81EStZoMf7L.jpg'
            },
            {
                id: '5',
                name: 'O Senhor dos Anéis',
                price: 80,
                quantity: 1,
                category: 'Fantasia Heróica',
                img: 'https://images-na.ssl-images-amazon.com/images/I/81MZ8OjmQrL.jpg'
            },
            {
                id: '6',
                name: 'Harry Potter',
                price: 65,
                quantity: 1,
                category: 'Aventura',
                img: 'https://images-na.ssl-images-amazon.com/images/I/61jgm6ooXzL.jpg'
            },
            {
                id: '7',
                name: 'A Metamorfose',
                price: 40,
                quantity: 1,
                category: 'Literatura Fantástica',
                img: 'https://commerceplus.com.br/uploads/produto_fotos/20190402185136_41qph1knjol.jpg'
            },
            {
                id: '8',
                name: 'Depois Daquela Viagem',
                price: 20,
                quantity: 1,
                category: 'Biografia',
                img: 'https://images-na.ssl-images-amazon.com/images/I/61eCuQw-AML.jpg'
            },
            {
                id: '9',
                name: 'Eu e Outras Poesias',
                price: 25,
                quantity: 1,
                category: 'Poesia',
                img: 'https://images-na.ssl-images-amazon.com/images/I/715S1W6R0XL.jpg'
            }
        ])
    }
}

export {CreateBooks}