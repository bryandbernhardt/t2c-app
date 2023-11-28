
export const bookService = {
  async create(book) {
    const client = useSupabaseClient();

    const create = {
      titulo: book.titulo,
      genero: book.genero,
      paginas: book.paginas,
      cpf_comprador: book.cpf_comprador,
      preco: book.preco,
    }

    const { error } = await client
      .from('Livros')
      .insert(create)

    if (error) {
      console.error(error);
    }
  }
};