
export const customerService = {
  async getAll() {
    const client = useSupabaseClient();

    const { data: customers, error } = await client
      .from('Compradores')
      .select('*');

    if (error) {
      console.error(error);
    }

    await Promise.all(customers.map(async (customer) => {
      const { data: books } = await client
        .from('Livros')
        .select('*')
        .eq('cpf_comprador', customer.cpf);

      const { data: sells } = await client
        .from('Vendas')
        .select('*')
        .eq('cpf_comprador', customer.cpf);

      customer.books = books;
      customer.sells = sells;
    }));

    return customers;
  },

  async edit(customer) {
    const client = useSupabaseClient();

    const updates = {
      cpf: customer.cpf,
      nome: customer.nome,
      genero: customer.genero,
      idade: customer.idade,
      gasto_medio: customer.gasto_medio,
      id_cliente: 1,
    }

    const { error } = await client
      .from('Compradores')
      .update(updates)
      .eq('cpf', customer.cpf);

    if (!error) {
      console.error(error);
    }
  },

  async create(customer) {
    const client = useSupabaseClient();

    const create = {
      cpf: customer.cpf,
      nome: customer.nome,
      genero: customer.genero,
      idade: customer.idade,
      gasto_medio: customer.gasto_medio,
      id_cliente: 1,
    }

    const { error } = await client
      .from('Compradores')
      .insert(create)

    if (!error) {
      console.error(error);
    }
  }
};