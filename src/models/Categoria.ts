import Produto from "./Produto";

export default interface Categoria {
    id: number;
    Titulo: string;
    descricao: string;
    produto?: Produto[]| null;
}